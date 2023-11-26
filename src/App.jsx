import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollTop from "./components/ScrollTop";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
        <Navbar aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
        <ScrollTop />
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
    </>
  );
}

export default App;
