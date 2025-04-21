import React from 'react';
import { 
  HeroWrapper, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle, 
  ButtonGroup 
} from './Hero.styles';
import Button from '../common/Button';

const Hero = () => {
  return (
    <HeroWrapper id="home">
      <HeroContent>
        <HeroTitle>Your One-Stop Shop for All Pet Needs</HeroTitle>
        <HeroSubtitle>
          Caring for Your Pets, One Tank and Cage at a Time
        </HeroSubtitle>
        <ButtonGroup>
          <Button as="a" href="#gallery" $cta>View Our Gallery</Button>
          <Button as="a" href="#contact" $outline>Contact Us</Button>
        </ButtonGroup>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;