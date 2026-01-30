import { Bell, PenBox } from "lucide-react";
import { Avatar, IconButton } from "@mui/material";

export function AuthorNav() {
    return (
        <header className="w-full h-16 bg-white border-b px-6 flex items-center justify-between sticky top-0 z-50">
            <div className="text-xl font-bold">BlogPedia</div>
            
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90">
                    <PenBox className="w-4 h-4" /> Write
                </button>
                
                <IconButton size="small">
                    <Bell className="w-5 h-5" />
                </IconButton>

                <Avatar 
                    src="/assets/pp.jpg" 
                    sx={{ width: 32, height: 32, cursor: 'pointer', border: '1px solid #eee' }} 
                />
            </div>
        </header>
    );
}