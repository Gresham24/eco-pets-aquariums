// src/components/About/About.styles.js
import styled, { keyframes } from 'styled-components';
import Section from '../common/Section';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutContent = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
  
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
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
  }
`;

export const AboutImage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  height: 100%;
  min-height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

export const FeatureList = styled.ul`
  list-style: none;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing.sm};
    flex-shrink: 0;
  }
`;