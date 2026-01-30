import { useUser } from "@/Utils/context/UserAuth";
import { ViewerNav } from "./ViewerNav";
import { GuestNav } from "./GuestNav";
import { AuthorNav } from "./AuthorNav";

export default function Navbar() {
    const { user } = useUser();

    // 1. Logged In (Author/Admin)
    if (user) return <AuthorNav />;

    // 2. Viewer (Not logged in, but looking at a blog post)
    // You can detect this via window.location.pathname if needed
    const isReading = window.location.pathname.startsWith("/blog/");
    if (isReading) return <ViewerNav />;

    // 3. Landing Page / Home (Guest)
    return <GuestNav />;
}