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
      
      <div className="scroll-container">
        <section className="scroll-section" id="home">
          <Home />
        </section>
        
        <section className="scroll-section" id="services">
          <Services />
        </section>
        
        <section className="scroll-section" id="resume">
          <Resume />
        </section>
        
        <section className="scroll-section" id="projects">
          <Projects />
        </section>
        
        <section className="scroll-section" id="contact">
          <Contact />
        </section>
      </div>

      <Footer />
    </Router>
  );
}
