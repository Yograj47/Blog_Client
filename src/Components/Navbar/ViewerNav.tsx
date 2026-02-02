import { Search, LogIn, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ViewerNav() {
    return (
        <header className="w-full h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <Link to="/" className="p-2 hover:bg-slate-50 rounded-full transition text-slate-500">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Reading Mode</div>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-slate-400 hover:text-slate-600 transition">
                    <Search className="w-5 h-5" />
                </button>
                <Link to="/login" className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    <LogIn className="w-4 h-4" /> Sign In
                </Link>
            </div>
        </header>
    );
}