// importing modules
import './App.css'
import Navigation from './components/navigationBar/Navigation';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

// components
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  // intializing the aos when the component is loaded
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, [])

  // react element
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App;