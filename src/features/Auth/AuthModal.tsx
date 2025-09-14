import { useAuthModal } from "../../context/AuthModal";
import SignIn from "./SigIn";
import SignUp from "./SignUp";
import { X } from "lucide-react";

export default function AuthModal() {
    const { authModal, setAuthModal } = useAuthModal();

    if (!authModal) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-md px-4"
            onClick={() => setAuthModal(null)}
        >
            {/* Close button outside the form */}
            <button
                className="fixed top-5 right-5 z-50 bg-[#333] p-2 rounded-full flex items-center justify-center hover:cursor-pointer"
                onClick={() => setAuthModal(null)}
            >
                <X size={24} color="#fff" />
            </button>

            {/* Form container */}
            <div
                className="w-full max-w-md animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                {authModal === "signin" && <SignIn />}
                {authModal === "signup" && <SignUp />}
            </div>
        </div>
    );
}
