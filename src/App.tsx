import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar/Nav";
import AuthModal from "./features/Auth/AuthModal";
import Home from "./pages/Home";
import { useUser } from "./context/UserAuth";
import AuthNav from "./Components/Layouts/Navbar/NavTwo";

export default function App() {
  const { user, logout } = useUser()
  return (
    <div>
      {user ? <AuthNav user={user} logout={logout} /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <AuthModal />
    </div>
  );
}
