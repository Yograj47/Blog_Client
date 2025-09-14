import { zodResolver } from "@hookform/resolvers/zod";
import {
    Box,
    Button,
    TextField,
    Divider,
    InputAdornment,
    IconButton,
    Alert,
    CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useAuthModal } from "../../context/AuthModal";
import { type IRegister, RegisterSchema } from "../../types/Auth";
import { useUser } from "../../context/UserAuth";
import { jwtDecode } from "jwt-decode";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { setAuthModal } = useAuthModal();
    const { setUser } = useUser()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegister>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: { name: "", email: "", sPassword: "", cPassword: "" },
    });

    const onSubmit = async (data: IRegister) => {
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.post("http://localhost:5000/api/v1/auth/signup", {
                name: data.name,
                email: data.email,
                password: data.sPassword,
            }, { withCredentials: true });
            if (response.data.accessToken) {
                localStorage.setItem("accessToken", response.data.accessToken);
                setUser(jwtDecode(response.data.accessToken));
                setAuthModal(null)
            }
        } catch (error: unknown) {
            setErrorMessage("Failed to register. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full bg-[#111827] rounded-2xl shadow-2xl border border-gray-800 p-8 animate-scaleIn">
            {/* Header */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-semibold text-white">Create Account ✨</h2>
                <p className="text-gray-400 mt-2">
                    Join us to start writing, reading, and exploring blogs.
                </p>
            </div>

            {/* Error */}
            {errorMessage && (
                <Alert severity="error" sx={{ mb: 3, borderRadius: "0.75rem" }}>
                    {errorMessage}
                </Alert>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display="flex" flexDirection="column" gap={3}>
                    {/* Name */}
                    <TextField
                        {...register("name")}
                        label="Name"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        InputLabelProps={{ style: { color: "#9ca3af" } }}
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "0.75rem",
                                "& fieldset": { borderColor: "#374151" },
                                "&:hover fieldset": { borderColor: "#60a5fa" },
                                "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
                            },
                        }}
                    />

                    {/* Email */}
                    <TextField
                        {...register("email")}
                        label="Email"
                        type="email"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        InputLabelProps={{ style: { color: "#9ca3af" } }}
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "0.75rem",
                                "& fieldset": { borderColor: "#374151" },
                                "&:hover fieldset": { borderColor: "#60a5fa" },
                                "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
                            },
                        }}
                    />

                    {/* Password */}
                    <TextField
                        {...register("sPassword")}
                        label="Create Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        error={!!errors.sPassword}
                        helperText={errors.sPassword?.message}
                        InputLabelProps={{ style: { color: "#9ca3af" } }}
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "0.75rem",
                                "& fieldset": { borderColor: "#374151" },
                                "&:hover fieldset": { borderColor: "#60a5fa" },
                                "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                                        {showPassword ? <Eye className="text-gray-300" /> : <EyeClosed className="text-gray-300" />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Confirm Password */}
                    <TextField
                        {...register("cPassword")}
                        label="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        error={!!errors.cPassword}
                        helperText={errors.cPassword?.message}
                        InputLabelProps={{ style: { color: "#9ca3af" } }}
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "0.75rem",
                                "& fieldset": { borderColor: "#374151" },
                                "&:hover fieldset": { borderColor: "#60a5fa" },
                                "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
                            },
                        }}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={loading}
                        sx={{
                            background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                            paddingY: "0.9rem",
                            fontSize: "1rem",
                            borderRadius: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            boxShadow: "0 8px 20px rgba(37,99,235,0.35)",
                            ":hover": {
                                background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
                            },
                        }}
                    >
                        {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Register"}
                    </Button>

                    {/* Divider */}
                    <Divider sx={{ borderColor: "#374151", color: "#9ca3af", fontSize: "0.9rem" }}>or</Divider>

                    {/* Already have account */}
                    <p className="text-sm text-center text-gray-400">
                        Already have an account?
                        <Button
                            variant="text"
                            onClick={() => setAuthModal?.("signin")}
                            sx={{
                                ml: 1,
                                color: "#60a5fa",
                                fontWeight: 600,
                                textTransform: "none",
                                ":hover": { color: "#3b82f6" },
                            }}
                        >
                            Login
                        </Button>
                    </p>
                </Box>
            </form>
        </div>
    );
}
