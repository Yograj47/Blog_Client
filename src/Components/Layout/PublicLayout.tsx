import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans antialiased">
            {/* NavOne updated to be white/transparent below */}
            <Navbar />
            
            <main className="flex-1">
                <Outlet /> 
            </main>

            <footer className="py-12 border-t border-gray-100 mt-20">
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
                    <span className="font-bold text-gray-900">BlogPedia</span>
                    <div className="flex gap-6">
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Twitter</a>
                    </div>
                    <span>© 2026 BlogPedia</span>
                </div>
            </footer>
        </div>
    );
}