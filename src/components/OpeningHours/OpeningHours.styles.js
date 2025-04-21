import styled from 'styled-components';
import Section from '../common/Section';

export const OpeningHoursSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.accent}40;
`;

export const OpeningHoursHeader = styled.div`
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
`;

export const HoursContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: hidden;
`;

export const HoursTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const HoursRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  
  &:last-child {
    border-bottom: none;
  }
  
  &.current-day {
    background-color: ${({ theme }) => theme.colors.primary}11;
    font-weight: bold;
    
    td {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const DayCell = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

export const HoursCell = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: right;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  margin-left: ${({ theme }) => theme.spacing.sm};
  
  ${({ open, theme }) => open ? `
    background-color: #4CAF5022;
    color: #4CAF50;
  ` : `
    background-color: #F4433622;
    color: #F44336;
  `}
`;