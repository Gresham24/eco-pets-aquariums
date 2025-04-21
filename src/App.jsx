import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

// Import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import OpeningHours from './components/OpeningHours/OpeningHours';
import Reviews from './components/Reviews/Reviews';
import PetCareTips from './components/PetCareTips/PetCareTips';
import Footer from './components/Footer/Footer';

const App = () => {
  // Fade-in animation for sections as they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Gallery />
      <OpeningHours />
      <Contact />
      <Reviews />
      <PetCareTips />
      <Footer />
    </ThemeProvider>
  );
};

export default App;