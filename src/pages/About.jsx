
import React, { useEffect } from "react";
import Footer from "./../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AboutHero from './../components/AboutHero';
import SecNavbar from './../components/SecNavbar';

const About = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from hash
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        // Add a delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      <SecNavbar />
      <ScrollToTop />
      <AboutHero />


      <Footer />
    </div>
  )
}

export default About