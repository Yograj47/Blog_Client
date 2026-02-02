import {
    Box, TextField, Button, IconButton,
    InputAdornment, CircularProgress, Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useAuthModal } from "@/Utils/context/AuthModal";
import { LoginSchema, type Credentials } from "../../Utils/types/Auth";
import { jwtDecode } from "jwt-decode";
import { useUser } from "@/Utils/context/UserAuth";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { setAuthModal } = useAuthModal();
    const { setUser } = useUser();

    const { register, handleSubmit, formState: { errors } } = useForm<Credentials>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = async (data: Credentials) => {
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.post("http://localhost:5000/api/v1/auth/login", data, { withCredentials: true });
            if (response.data.accessToken) {
                localStorage.setItem("accessToken", response.data.accessToken);
                setUser(jwtDecode(response.data.accessToken));
                setAuthModal(null);
            }
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || "Authentication failed.");
        } finally {
            setLoading(false);
        }
    };

    const inputStyles = {
        "& .MuiOutlinedInput-root": {
            color: "white",
            backgroundColor: "#0f172a", // Slate-950/900 mix
            borderRadius: "12px",
            "& fieldset": { borderColor: "#334155" }, // Slate-700
            "&:hover fieldset": { borderColor: "#475569" },
            "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
        },
        "& .MuiInputLabel-root": { color: "#94a3b8" },
        "& .Mui-focused.MuiInputLabel-root": { color: "#3b82f6" }
    };

    return (
        <div className="w-full p-8 md:p-10 bg-slate-900">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
                <p className="text-slate-400 text-sm mt-1 font-medium">Please enter your credentials to access the core.</p>
            </div>

            {errorMessage && (
                <Alert severity="error" className="mb-6 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                    {errorMessage}
                </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="flex flex-col gap-5">
                    <TextField
                        {...register("email")}
                        label="Email Address"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={inputStyles}
                    />

                    <TextField
                        {...register("password")}
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={inputStyles}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} sx={{ color: "#64748b" }}>
                                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        className="py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl normal-case shadow-lg shadow-blue-500/10 transition-all active:scale-[0.98]"
                        fullWidth
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
                    </Button>

                    <div className="flex items-center gap-4 my-2">
                        <div className="h-[1px] flex-1 bg-slate-800"></div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">OR</span>
                        <div className="h-[1px] flex-1 bg-slate-800"></div>
                    </div>

                    <p className="text-sm text-center text-slate-400 font-medium">
                        Don't have an account? 
                        <button 
                            type="button" 
                            onClick={() => setAuthModal("signup")} 
                            className="ml-2 text-blue-400 font-bold hover:text-blue-300 transition-colors"
                        >
                            Sign Up
                        </button>
                    </p>
                </Box>
            </form>
        </div>
    );
}