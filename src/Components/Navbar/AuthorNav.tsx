import { Bell, PenBox, Search, ChevronDown } from "lucide-react";
import { Avatar, IconButton } from "@mui/material";

export function AuthorNav() {
    return (
        <header className="w-full h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <div className="text-lg font-bold tracking-tighter">BP</div>
                <div className="h-6 w-[1px] bg-slate-200 mx-2" /> {/* Tech-style divider */}
                <div className="hidden md:flex relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Search your library..." 
                        className="bg-slate-50 border-none rounded-md py-1.5 pl-9 text-sm w-64 focus:ring-2 focus:ring-blue-100 transition"
                    />
                </div>
            </div>
            
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-slate-800 transition">
                    <PenBox className="w-4 h-4" /> Write
                </button>
                
                <IconButton size="small" sx={{ color: '#64748b' }}>
                    <Bell className="w-5 h-5" />
                </IconButton>

                <div className="flex items-center gap-2 pl-2 cursor-pointer group">
                    <Avatar 
                        src="/assets/pp.jpg" 
                        sx={{ width: 30, height: 30, border: '1px solid #e2e8f0' }} 
                    />
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition" />
                </div>
            </div>
        </header>
    );
}