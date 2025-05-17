import React from 'react';
import {
  ContactSection,
  ContactGrid,
  ContactInfo,
  ContactItem,
  ContactContent,
  MapContainer
} from './Contact.styles';
import Container from '../common/Container';

const Contact = () => {
  // Placeholder data - would be replaced with actual store data
  const storeAddress = "Petstores, Cape Town, 7441";
  const phoneNumber = "+27 (012) 345-5678";
  const emailAddress = "info@petstores.com";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544014.68002494!2d18.147202354552345!3d-33.901530135566134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0xcfa422aef84cac98!2sCity%20of%20Cape%20Town%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1747473368408!5m2!1sen!2sza";
  
  return (
    <ContactSection id="contact">
      <Container>
        <ContactGrid>
          <ContactInfo>
            <h2>Contact Us</h2>
            
            <ContactItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <ContactContent>
                <h3>Our Location</h3>
                <p>{storeAddress}</p>
              </ContactContent>
            </ContactItem>
            
            <ContactItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <ContactContent>
                <h3>Call Us</h3>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </ContactContent>
            </ContactItem>
            
            <ContactItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <ContactContent>
                <h3>WhatsApp</h3>
                <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Nicky & Paddy! I would like to enquire about some of your pet products')}`} target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp
                </a>
              </ContactContent>
            </ContactItem>
            
            <ContactItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <ContactContent>
                <h3>Email Us</h3>
                <a href="#">{emailAddress}</a>
              </ContactContent>
            </ContactItem>
          </ContactInfo>
          
          <MapContainer>
            <iframe
              src={googleMapsUrl}
              title="Eco-Pets & Aquariums location"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;