import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import './App.css'
import Navbar from './Components/navBar'
import Footer from './Components/footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
