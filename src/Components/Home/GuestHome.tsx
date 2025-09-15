import { Button } from "@mui/material";
import { useAuthModal } from "@/Utils/context/AuthModal";

export default function GuestHome() {
    const { setAuthModal } = useAuthModal();

    const handleOpenAuth = (type: "signin" | "signup") => {
        setAuthModal(type);
    };

    return (
        <div className="h-full flex flex-col items-center justify-center px-4 text-center gap-6">
            <h1 className="text-5xl font-extrabold">
                Welcome to <span className="text-blue-500">BlogPedia</span>
            </h1>
            <p className="text-lg max-w-xl text-gray-700">
                Discover amazing articles, learn new things, and join a community of
                passionate readers and writers.
            </p>

            <div className="flex gap-4">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenAuth("signup")}
                    sx={{ borderRadius: "20px", px: 4, py: 1.5, fontWeight: 600 }}
                >
                    Sign Up
                </Button>

                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenAuth("signin")}
                    sx={{ borderRadius: "20px", px: 4, py: 1.5, fontWeight: 600 }}
                >
                    Login
                </Button>
            </div>
        </div>
    );
}
