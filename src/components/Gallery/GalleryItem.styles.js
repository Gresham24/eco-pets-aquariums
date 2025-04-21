import styled from 'styled-components';

export const GalleryItemWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform ${({ theme }) => theme.transitions.medium},
              box-shadow ${({ theme }) => theme.transitions.medium};
  height: 250px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    
    .gallery-overlay {
      opacity: 1;
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

export const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 124, 145, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.medium};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

export const GalleryTitle = styled.h3`
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const GalleryDescription = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0;
`;