import axios from "axios";
import { jwtDecode } from "jwt-decode";

const axiosAuth = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
});

axiosAuth.interceptors.request.use(async (config) => {
    let accessToken: string | null = localStorage.getItem("accessToken");

    if (accessToken) {
        const decoded: any = jwtDecode(accessToken);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
            const refreshRes = await axios.get("/auth/refresh", { withCredentials: true });
            accessToken = refreshRes.data.accessToken;
            localStorage.setIte("accessToken", accessToken);
        }

        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
});

export default axiosAuth;
