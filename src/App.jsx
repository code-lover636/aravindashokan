import { useState, useEffect } from 'react'

import Navbar from './pages/Navbar'
import Experience from './pages/Experience'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import Services from './pages/Services'
import Work from './pages/Work'
import Loading from './pages/Loading'


function App() {
  
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const { top, height } = section.getBoundingClientRect();
        const sectionId = section.getAttribute('id');

        if (top <= 0 && top + height > 0) {
          setActiveSection(sectionId);
        }
      });
    };
    let root = document.getElementById("root");
    root.addEventListener('scroll', handleScroll);

    return () => {
      root.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Loading />
      <Navbar activeSection={activeSection} />
      <Home className="sections" id="home-s"/>
      <About className="sections" id="about-s"/>
      <Achievements className="sections" id="achievements-s"/>
      <Services className="sections" id="services-s"/>
      <Experience className="sections" id="experience-s"/>
      <Work className="sections" id="work-s"/>
      <Contact className="sections" id="contact-s"/>
    </>
  )
}

export default App
