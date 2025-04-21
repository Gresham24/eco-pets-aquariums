import styled from 'styled-components';
import Section from '../common/Section';

export const ReviewsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ReviewsHeader = styled.div`
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

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ReviewCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform ${({ theme }) => theme.transitions.medium},
              box-shadow ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ReviewAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.md};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const ReviewAuthor = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.text}99;
  }
`;

export const Stars = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  svg {
    color: #FFC107;
    margin-right: 2px;
  }
`;

export const ReviewContent = styled.div`
  p {
    margin: 0;
    line-height: 1.8;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text}DD;
  }
`;

export const AllReviewsLink = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  a {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    
    svg {
      margin-left: ${({ theme }) => theme.spacing.xs};
      transition: transform ${({ theme }) => theme.transitions.fast};
    }
    
    &:hover svg {
      transform: translateX(3px);
    }
  }
`;