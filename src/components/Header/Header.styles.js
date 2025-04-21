import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ $scrolled, theme }) => $scrolled ? theme.shadows.small : 'none'};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.medium};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: ${({ theme }) => theme.spacing.lg};
    padding-right: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Logo = styled.div`
  img {
    height: 50px;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 60px;
    }
  }
`;

export const NavToggle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: all ${({ theme }) => theme.transitions.medium};
    position: relative;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavMenu = styled.nav`
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  text-align: center;
  padding: 2rem;
  transition: transform ${({ theme }) => theme.transitions.medium};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: static;
    height: auto;
    width: auto;
    padding: 0;
    box-shadow: none;
    transform: none;
  }
`;

export const NavItem = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing.md} 0;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.cta};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    margin-left: ${({ theme }) => theme.spacing.md};
  }
`;

