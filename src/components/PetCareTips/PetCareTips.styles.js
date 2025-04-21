import styled from 'styled-components';
import Section from '../common/Section';

export const PetCareTipsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.secondary}30;
`;

export const PetCareTipsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h2 {
    display: inline-block;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  p {
    max-width: 700px;
    margin: ${({ theme }) => theme.spacing.lg} auto 0;
  }
`;

export const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const TipCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform ${({ theme }) => theme.transitions.medium},
              box-shadow ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const TipImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  ${TipCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const TipContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.8;
  }
`;

export const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  
  svg {
    margin-left: ${({ theme }) => theme.spacing.xs};
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    svg {
      transform: translateX(3px);
    }
  }
`;