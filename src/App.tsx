import Navbar from "./Components/Layouts/Navbar/Nav";
import AuthModal from "./features/Auth/AuthModal";

export default function App() {
  return (
    <div>
      <Navbar />
      <div>App</div>
      <AuthModal />
    </div>
  )
}
