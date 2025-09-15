import { Outlet } from "react-router-dom";
import NavOne from "../Navbar/NavOne";

export default function PublicLayout() {
    return (
        <div className="h-auto w-screen">
            <NavOne />
            <main className="h-[90vh] overflow-y-auto w-full">
                <Outlet /> {/* ← This renders the child route content */}
            </main>
        </div>
    );
}
