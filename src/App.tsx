import { Route, Routes } from "react-router-dom";
import AuthModal from "./features/Auth/AuthModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import { useUser } from "./Utils/context/UserAuth";

// Layouts
import WriteBlog from "./pages/WriteBlog";
import PublicLayout from "./Components/Layout/MainLayout";

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
              <Route path="/" element={<Home />} />
              {/* Add other logged-in pages here */}
            
              <Route path="/b/write" element={<WriteBlog />} />
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
