import { Outlet } from "react-router-dom";
import NavTwo from "../Navbar/NavTwo";

export default function ViewerLayout() {
    return (
        <div className="h-screen w-screen">
            <NavTwo />
            <main className="h-[90vh]">
                <Outlet /> {/* ← Child route renders here */}
            </main>
        </div>
    );
}
