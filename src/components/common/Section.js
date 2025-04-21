import styled from 'styled-components';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`;

export default Section;
