import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar"; // We will build this next
import { Footer } from "../Footer/Footer";

export default function MainLayout() {
    return (
        // The wrapper ensures the footer is pushed to the bottom if content is short
        <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-100">

            {/* 1. HEADER (Navbar) */}
            <Navbar />

            <main className="flex-grow pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
}