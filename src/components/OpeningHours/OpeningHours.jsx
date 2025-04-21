import React from 'react';
import {
  OpeningHoursSection,
  OpeningHoursHeader,
  HoursContainer,
  HoursTable,
  HoursRow,
  DayCell,
  HoursCell,
  StatusBadge
} from './OpeningHours.styles';
import Container from '../common/Container';

const OpeningHours = () => {
  // Placeholder store hours - would be replaced with actual store data
  const hours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];
  
  // Get current day to highlight
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];
  
  // Check if store is currently open (simple implementation)
  const isCurrentlyOpen = () => {
    const now = new Date();
    const day = daysOfWeek[now.getDay()];
    const currentHours = hours.find(h => h.day === day);
    
    // If closed today
    if (currentHours.hours === 'Closed') return false;
    
    // Parse opening hours
    const [openTime, closeTime] = currentHours.hours.split(' - ');
    
    // Parse opening time
    const openMatch = openTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!openMatch) return false;
    
    let openingHour = parseInt(openMatch[1]);
    const openingMinute = parseInt(openMatch[2]);
    const isOpenPM = openMatch[3].toUpperCase() === 'PM';
    
    if (isOpenPM && openingHour !== 12) openingHour += 12;
    if (!isOpenPM && openingHour === 12) openingHour = 0;
    
    // Parse closing time
    const closeMatch = closeTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!closeMatch) return false;
    
    let closingHour = parseInt(closeMatch[1]);
    const closingMinute = parseInt(closeMatch[2]);
    const isClosePM = closeMatch[3].toUpperCase() === 'PM';
    
    if (isClosePM && closingHour !== 12) closingHour += 12;
    if (!isClosePM && closingHour === 12) closingHour = 0;
    
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Check if current time is within opening hours
    if (
      (currentHour > openingHour || (currentHour === openingHour && currentMinute >= openingMinute)) &&
      (currentHour < closingHour || (currentHour === closingHour && currentMinute < closingMinute))
    ) {
      return true;
    }
    
    return false;
  };
  
  const storeOpen = isCurrentlyOpen();
  
  return (
    <OpeningHoursSection>
      <Container>
        <OpeningHoursHeader>
          <h2>Opening Hours</h2>
          <StatusBadge open={storeOpen}>
            {storeOpen ? 'OPEN NOW' : 'CLOSED NOW'}
          </StatusBadge>
        </OpeningHoursHeader>
        
        <HoursContainer>
          <HoursTable>
            <tbody>
              {hours.map((item) => (
                <HoursRow 
                  key={item.day} 
                  className={item.day === currentDay ? 'current-day' : ''}
                >
                  <DayCell>{item.day}</DayCell>
                  <HoursCell>{item.hours}</HoursCell>
                </HoursRow>
              ))}
            </tbody>
          </HoursTable>
        </HoursContainer>
      </Container>
    </OpeningHoursSection>
  );
};

export default OpeningHours;