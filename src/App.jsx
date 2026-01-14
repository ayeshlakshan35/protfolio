import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar";
import Footer from "./Components/footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Router =
  import.meta.env.MODE === "development" ? BrowserRouter : HashRouter;

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}
