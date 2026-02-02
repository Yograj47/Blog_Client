export function AuthorFooter() {
    return (
        <footer className="w-full py-6 border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                
                {/* Left side: Copyright & Version */}
                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold tracking-tighter text-slate-900">
                        BlogPedia <span className="text-slate-300 font-normal ml-1">v2.4.0</span>
                    </span>
                    <div className="hidden md:block h-3 w-[1px] bg-slate-200"></div>
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                        © 2026 Dashboard
                    </p>
                </div>

                {/* Right side: Utility Links */}
                <nav className="flex items-center gap-6">
                    <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition">
                        Help Center
                    </a>
                    <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition">
                        Privacy
                    </a>
                    <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition">
                        Terms
                    </a>
                    <div className="flex items-center gap-1.5 ml-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Systems Online</span>
                    </div>
                </nav>

            </div>
        </footer>
    );
}