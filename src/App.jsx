import './App.css'
import Welcome from './components/welcome'
import Navbar from './components/navbar'
import { useState, useEffect } from "react";

function App() {
  const [selected, setSelected] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-to');
      let selectedSection = selected;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= 80 &&
          (rect.bottom >= 0 || (rect.top <= 0 && rect.bottom >= window.innerHeight))
        ) {
          selectedSection = section.id;
        }
      });

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
          selectedSection = 'contact';
        }
      }

      setSelected(selectedSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selected]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section.id !== "contact") {
      let offset = -60;
      window.scrollTo({
        top: section.offsetTop + offset,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 10000,
        behavior: "smooth"
      })
    }
  };

  return (
    <div className="app">
    <Navbar scrollToSection={scrollToSection} selected={selected} />
      <Welcome scrollToSection={scrollToSection} />
    </div>
  )
}

export default App
