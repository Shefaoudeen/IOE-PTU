import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Past from "./pages/Past";
import Upcoming from "./pages/Upcoming";
import Bearers from "./pages/Bearers";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Past />
      <Upcoming />
      <Bearers />
      <Contact />
      <Footer />
    </div>
  );
}
