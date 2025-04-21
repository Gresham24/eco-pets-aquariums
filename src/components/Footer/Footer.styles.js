import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1fr;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

export const FooterColumn = styled.div`
  h3 {
    color: white;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.large};
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 40px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.cta};
    }
  }
  
  p {
    color: white;
    opacity: 0.8;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterLink = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  a {
    color: white;
    opacity: 0.8;
    transition: opacity ${({ theme }) => theme.transitions.fast};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    
    svg {
      margin-right: ${({ theme }) => theme.spacing.xs};
    }
    
    &:hover {
      opacity: 1;
      color: white;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.cta};
    transform: translateY(-3px);
    color: white;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  
  p {
    color: white;
    opacity: 0.6;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const Newsletter = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const NewsletterForm = styled.form`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.sm};
  
  input {
    flex: 1;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium} 0 0 ${({ theme }) => theme.borderRadius.medium};
    outline: none;
  }
  
  button {
    background-color: ${({ theme }) => theme.colors.cta};
    color: white;
    border: none;
    border-radius: 0 ${({ theme }) => theme.borderRadius.medium} ${({ theme }) => theme.borderRadius.medium} 0;
    padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    cursor: pointer;
    transition: background-color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.cta}DD;
    }
  }
`;