import React, { useState } from 'react';
import {
  GallerySection,
  GalleryHeader,
  TabsContainer,
  Tab,
  GalleryGrid
} from './Gallery.styles';
import GalleryItem from './GalleryItem';
import Container from '../common/Container';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const galleryItems = [
    {
      id: 1,
      image: '/tanks.jpg',
      title: 'Premium Fish Tanks',
      description: 'High-quality aquariums for all fish types',
      category: 'aquarium'
    },
    {
      id: 2,
      image: '/koi-fish.jpg',
      title: 'Tropical Fish',
      description: 'Vibrant and healthy tropical fish varieties',
      category: 'aquarium'
    },
    {
      id: 3,
      image: '/goldfish.jpg',
      title: 'Goldfish Collection',
      description: 'Beautiful goldfish for your home aquarium',
      category: 'aquarium'
    },
    {
      id: 4,
      image: '/hamsters.jpg',
      title: 'Hamsters',
      description: 'Adorable and active small pets',
      category: 'cage'
    },
    {
      id: 5,
      image: '/birds.jpg',
      title: 'Colorful Birds',
      description: 'Vibrant bird species for avian enthusiasts',
      category: 'cage'
    },
    {
      id: 6,
      image: '/supplies.jpg',
      title: 'Pet Supplies',
      description: 'Everything you need for proper pet care',
      category: 'supplies'
    },
    {
      id: 7,
      image: '/reptile-accessories.jpg',
      title: 'Pet Supplies',
      description: 'All your reptile accessory needs',
      category: 'supplies'
    }
  ];
  
  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);
  
  return (
    <GallerySection id="gallery">
      <Container>
        <GalleryHeader>
          <h2>Our Gallery</h2>
          <p>
            Explore our diverse collection of pets and quality products designed 
            to make pet care easier and more enjoyable.
          </p>
        </GalleryHeader>
        
        <TabsContainer>
          <Tab 
            $active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            All
          </Tab>
          <Tab 
            $active={activeTab === 'aquarium'} 
            onClick={() => setActiveTab('aquarium')}
          >
            Aquarium
          </Tab>
          <Tab 
            $active={activeTab === 'cage'} 
            onClick={() => setActiveTab('cage')}
          >
            Cage Pets
          </Tab>
          <Tab 
            $active={activeTab === 'supplies'} 
            onClick={() => setActiveTab('supplies')}
          >
            Supplies
          </Tab>
        </TabsContainer>
        
        <GalleryGrid>
          {filteredItems.map(item => (
            <GalleryItem 
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </GalleryGrid>
      </Container>
    </GallerySection>
  );
};

export default Gallery;