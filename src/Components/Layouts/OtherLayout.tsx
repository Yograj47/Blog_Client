import { Outlet } from "react-router-dom";
import NavThree from "../Navbar/NavThree";

export default function OtherLayout() {
    return (
        <div className="h-screen w-screen">
            <NavThree />
            <main className="h-[90vh]">
                <Outlet /> {/* ← Child route renders here */}
            </main>
        </div>
    );
}
