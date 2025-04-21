import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 600;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.cta};
    }
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Smooth scrolling for section navigation */
  html {
    scroll-behavior: smooth;
  }

  /* Mobile-first responsive design */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      font-size: calc(${({ theme }) => theme.fontSizes.xxxlarge} * 1.2);
    }
    
    h2 {
      font-size: calc(${({ theme }) => theme.fontSizes.xxlarge} * 1.2);
    }
  }
`;

export default GlobalStyles;