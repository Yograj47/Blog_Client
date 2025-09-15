import { Route, Routes } from "react-router-dom";
import AuthModal from "./features/Auth/AuthModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import { useUser } from "./Utils/context/UserAuth";

// Layouts
import PublicLayout from "./Components/Layouts/PublicLayout";
import ViewerLayout from "./Components/Layouts/ViewerLayout";
import OtherLayout from "./Components/Layouts/OtherLayout";
import WriteBlog from "./pages/WriteBlog";

export default function App() {
  const { user } = useUser();

  return (
    <>
      <Routes>
        {/* Public pages (guests only) */}
        {!user && (
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Route>
        )}

        {/* Viewer pages (for logged-in users) */}
        {user && (
          <>
            <Route element={<ViewerLayout />}>
              <Route path="/" element={<Home />} />
              {/* Add other logged-in pages here */}
            </Route>
            <Route element={<OtherLayout />}>
              <Route path="/b/write" element={<WriteBlog />} />
            </Route>
          </>
        )}

        {/* Other minimal pages */}
        {/* <Route element={<OtherLayout />}>
        </Route> */}

        {/* 🔹 Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Auth modal */}
      <AuthModal />
    </>
  );
}
