import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Past from "./pages/Past";
import Upcoming from "./pages/Upcoming";
import Convenor from "./pages/Convenor";
import Test from "./pages/Test";
import Bearers from "./pages/Bearers";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Past />
      <Upcoming />
      <Convenor />
      <Test />
      <Bearers />
      <Contact />
    </div>
  );
}
