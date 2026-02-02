import { Link } from "react-router-dom";

export function GuestNav() {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/70 backdrop-blur-md border-b border-slate-200/60 px-6 md:px-12 flex items-center justify-between z-50">
            {/* Logo with Tech Typography */}
            <Link to="/" className="text-xl font-bold tracking-tighter text-slate-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">B</div>
                BlogPedia
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/explore" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition">Explore</Link>
                    <Link to="/changelog" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition">Changelog</Link>
                </nav>
                
                <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
                    <Link to="/signup" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-sm">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}