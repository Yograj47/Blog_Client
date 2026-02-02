import { useUser } from "@/Utils/context/UserAuth";
import { ViewerNav } from "./ViewerNav";
import { GuestNav } from "./GuestNav";
import { AuthorNav } from "./AuthorNav";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const { user } = useUser();
    const location = useLocation();

    if (user) return <AuthorNav />;

    const isReading = location.pathname.startsWith("/blog/");
    if (isReading) return <ViewerNav />;

    return <GuestNav />;
}