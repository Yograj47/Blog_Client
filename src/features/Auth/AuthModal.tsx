import { useAuthModal } from "@/Utils/context/AuthModal";
import SignIn from "./SigIn";
import SignUp from "./SignUp";
import { X } from "lucide-react";

export default function AuthModal() {
    const { authModal, setAuthModal } = useAuthModal();

    if (!authModal) return null;

    return (
        <div 
            className="fixed inset-0 z-[100] flex justify-center items-center bg-slate-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={() => setAuthModal(null)}
        >
            <div 
                className="w-full max-w-[460px] relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Minimalist Close Icon */}
                <button 
                    onClick={() => setAuthModal(null)}
                    className="absolute -top-12 right-0 text-slate-400 hover:text-white transition-all hover:rotate-90 duration-300"
                >
                    <X size={24} strokeWidth={1.5} />
                </button>

                {/* THE UPDATE: 
                   1. Base: bg-slate-900 (lighter than the previous black)
                   2. Border: border-slate-700/50 (adds definition)
                   3. Shadow: A wider, softer blue glow to lift it off the background
                */}
                <div className="bg-slate-900 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_30px_rgba(59,130,246,0.1)] overflow-hidden border border-slate-700/50 animate-in zoom-in-95 duration-300">
                    {authModal === "signin" && <SignIn />}
                    {authModal === "signup" && <SignUp />}
                </div>
            </div>
        </div>
    );
}