import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollTop from "./components/ScrollTop";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();

  return (
    <div>
      <Navbar aboutRef={aboutRef} projectsRef={projectsRef} />
      <ScrollTop />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
