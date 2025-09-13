import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
// import { useAuthModal } from "../context/AuthModal";
import { useNavigate } from "react-router-dom";

interface IUser {
    _id: string;
    name: string;
    role: string;
    exp: number;
}

type AuthContextType = {
    user: IUser | null;
    setUser: (user: IUser) => void;
    logout: () => void;
};

const UserAuthContext = createContext<AuthContextType | undefined>(undefined);

export function UserAuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();
    // const { setAuthModal } = useAuthModal();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            try {
                const decoded = jwtDecode<IUser>(token);
                setUser(decoded);
            } catch (err) {
                console.error("Invalid token", err);
                localStorage.removeItem("accessToken");
            }
        }
    }, []);

    const logout = async () => {
        localStorage.removeItem("accessToken");
        setUser(null);
        navigate("/")
    };

    return (
        <UserAuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserAuthContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserAuthContext);
    if (!context) throw new Error("useUser must be used within UserAuthProvider");
    return context;
};
