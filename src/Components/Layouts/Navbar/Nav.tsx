import { useAuthModal } from "../../../context/AuthModal";
import { Button } from "@mui/material";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../../context/UserAuth";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { setAuthModal } = useAuthModal();
    const { user, logout } = useUser();

    useEffect(() => {
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [mobileOpen]);

    const handleOpenAuth = (type: "signin" | "signup") => {
        setAuthModal(type);
        setMobileOpen(false);
    };

    return (
        <header className="h-[10vh] sticky top-0 left-0 w-full bg-black/90 backdrop-blur-md shadow-lg z-50 flex justify-between items-center px-6 py-4 md:px-12 transition-all">
            {/* Brand */}
            <NavLink
                to="/"
                className="grace-font text-xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent tracking-wide hover:opacity-80 transition"
            >
                BlogPedia
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 ml-auto">
                <NavLink
                    to="/about"
                    className="px-3 py-2 text-gray-300 hover:text-sky-400 hover:scale-105 transition"
                >
                    About
                </NavLink>
                <NavLink
                    to="/services"
                    className="px-3 py-2 text-gray-300 hover:text-sky-400 hover:scale-105 transition"
                >
                    Services
                </NavLink>

                {user ? <Button onClick={() => logout()}>Logout</Button> : <p className="hidden"></p>}
                <Button
                    variant="outlined"
                    onClick={() => handleOpenAuth("signup")}
                    className="px-3 py-2 text-gray-300 hover:text-sky-400 hover:scale-105 transition"
                >
                    Sign Up
                </Button>
                <Button
                    variant="contained"
                    onClick={() => handleOpenAuth("signin")}
                    sx={{
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: 600,
                        px: "1.5rem",
                        py: "0.6rem",
                    }}
                >
                    Login
                </Button>
            </nav>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-drawer"
                    onClick={() => setMobileOpen((s) => !s)}
                    className="p-2 text-white transition"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-[10vh] right-0 h-[90vh] w-[70%] sm:w-[50%] bg-black/95 backdrop-blur-2xl 
                    flex-col items-start gap-6 px-6 py-10 transform transition-transform duration-300 ease-in-out
                    ${mobileOpen ? "translate-x-0 flex" : "translate-x-full pointer-events-none hidden"}
                `}
            >
                <NavLink
                    to="/about"
                    onClick={() => setMobileOpen(false)}
                    className="text-lg flex items-center gap-3 text-gray-300 hover:text-sky-400 transition"
                >
                    About
                </NavLink>
                <NavLink
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="text-lg flex items-center gap-3 text-gray-300 hover:text-sky-400 transition"
                >
                    Services
                </NavLink>

                <div className="w-full flex flex-col gap-4 mt-6">
                    <Button
                        variant="outlined"
                        onClick={() => handleOpenAuth("signup")}
                        className="w-full text-gray-300 hover:text-sky-400 transition"
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleOpenAuth("signin")}
                        sx={{
                            borderRadius: "10px",
                            fontWeight: 600,
                            py: "0.9rem",
                        }}
                    >
                        Login
                    </Button>
                </div>

            </div>
        </header>
    );
}
