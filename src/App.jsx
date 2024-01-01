import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Past from "./pages/Past";
import Upcoming from "./pages/Upcoming";
import Convenor from "./pages/Convenor";
import Bearers from "./pages/Bearers";
import Contact from "./pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import LogoMobile from "./pages/Logo";

export default function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="relative">
      <LogoMobile />
      <Navbar />
      <Home />
      <Past />
      <Upcoming />
      <Convenor />
      <Bearers />
      <Contact />
    </div>
  );
}
