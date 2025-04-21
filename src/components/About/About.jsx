import React from 'react';
import { 
  AboutSection, 
  AboutGrid, 
  AboutContent, 
  AboutImage,
  FeatureList,
  FeatureItem
} from './About.styles';
import Container from '../common/Container';

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutGrid>
          <AboutContent>
            <h2>About Eco-Pets & Aquariums</h2>
            <p>
              At Eco-Pets & Aquariums, we're passionate about pets. Offering quality supplies for fish, hamsters, birds, and more, we're your local experts in pet care.
            </p>
            <p>
              With years of experience in the pet industry, our knowledgeable team is dedicated to helping you provide the best care for your beloved companions.
            </p>
            <FeatureList>
              <FeatureItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Expert advice on pet care and maintenance
              </FeatureItem>
              <FeatureItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Quality products for all pet types
              </FeatureItem>
              <FeatureItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Specializing in aquariums and small animals
              </FeatureItem>
            </FeatureList>
          </AboutContent>
          <AboutImage>
            <img src="/aquariums.jpg" alt="Inside our pet store" />
          </AboutImage>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About;