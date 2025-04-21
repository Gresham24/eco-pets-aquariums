import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  border: none;
  cursor: pointer;
  
  ${({ $primary, theme }) => $primary && css`
    background-color: ${theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.small};
    }
  `}
  
  ${({ $cta, theme }) => $cta && css`
    background-color: ${theme.colors.cta};
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    
    &:hover {
      background-color: ${theme.colors.cta};
      color: ${theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  `}
  
  ${({ $outline }) => $outline && css`
    background-color: transparent;
    color: white;
    border: 2px solid white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `}
  
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  `}
`;

export default Button;