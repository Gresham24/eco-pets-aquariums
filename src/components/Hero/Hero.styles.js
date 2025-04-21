import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroWrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/fish tank.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  overflow: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 70vh;
    min-height: 500px;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  text-align: center;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

