import React, { useState, useEffect } from 'react';
import { 
  HeaderWrapper, 
  HeaderContainer, 
  Logo, 
  NavToggle, 
  NavMenu, 
  NavItem 
} from "./Header.styles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleNav = () => {
    setOpen(!open);
  };
  
  const closeNav = () => {
    setOpen(false);
  };
  
  return (
    <HeaderWrapper $scrolled={scrolled}>
      <HeaderContainer>
        <Logo>
          <a href="#home">
            <img src="/logo-icon.png" alt="Eco-Pets & Aquariums" /> 
            
          </a>
        </Logo>
        
        <NavToggle open={open} onClick={toggleNav}>
          <div />
          <div />
          <div />
        </NavToggle>
        
        <NavMenu open={open}>
          <NavItem href="#about" onClick={closeNav}>About</NavItem>
          <NavItem href="#gallery" onClick={closeNav}>Gallery</NavItem>
          <NavItem href="#contact" onClick={closeNav}>Contact</NavItem>
        </NavMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;