import { Search, LogIn } from "lucide-react";

export function ViewerNav() {
    return (
        <header className="w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-50">
            <div className="text-xl font-bold text-gray-800">BlogPedia</div>
            
            <div className="flex-1 max-w-md mx-8 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search blogs..." 
                    className="w-full bg-gray-100 border-none rounded-lg py-1.5 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-gray-200"
                />
            </div>

            <button className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                <LogIn className="w-4 h-4" /> Sign In
            </button>
        </header>
    );
}