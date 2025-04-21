import React from 'react';
import {
  PetCareTipsSection,
  PetCareTipsHeader,
  TipsGrid,
  TipCard,
  TipImage,
  TipContent,
  ReadMoreLink
} from './PetCareTips.styles';
import Container from '../common/Container';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const PetCareTips = () => {
  // Pet care tips data
  const tips = [
    {
      id: 1,
      title: 'How to Set Up a Fish Tank',
      image: '/fishtank-cover.svg',
      description: 'Learn the essentials of setting up a healthy aquarium environment for your fish, including water conditioning, filtration, and decorations.',
      link: '#'
    },
    {
      id: 2,
      title: 'Hamster Care for Beginners',
      image: '/hamster-cover.svg',
      description: 'Discover everything you need to know about caring for your new hamster, from cage setup to diet and exercise requirements.',
      link: '#'
    },
    {
      id: 3,
      title: 'Bird Nutrition Guide',
      image: '/bird-cover.svg',
      description: 'Find out the best foods to keep your birds healthy and happy, including seed mixes, fresh fruits, and vegetables suitable for different species.',
      link: '#'
    }
  ];
  
  return (
    <PetCareTipsSection id="pet-care-tips">
      <Container>
        <PetCareTipsHeader>
          <h2>Pet Care Tips</h2>
          <p>
            Check out our helpful guides to provide the best care for your pets. From setting up habitats to nutrition advice, we've got you covered.
          </p>
        </PetCareTipsHeader>
        
        <TipsGrid>
          {tips.map((tip) => (
            <TipCard key={tip.id}>
              <TipImage>
                <img src={tip.image} alt={tip.title} />
              </TipImage>
              <TipContent>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <ReadMoreLink href={tip.link}>
                  Read More <ArrowRightIcon />
                </ReadMoreLink>
              </TipContent>
            </TipCard>
          ))}
        </TipsGrid>
      </Container>
    </PetCareTipsSection>
  );
};

export default PetCareTips;