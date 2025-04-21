import styled from 'styled-components';
import Section from '../common/Section';

export const ContactSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled.div`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

export const ContactContent = styled.div`
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  
  p, a {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }
  
  a {
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const MapContainer = styled.div`
  height: 100%;
  min-height: 300px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  iframe {
    width: 100%;
    height: 100%;
    min-height: 300px;
    border: none;
  }
`;
