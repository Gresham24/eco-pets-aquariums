import React from 'react';
import {
  ReviewsSection,
  ReviewsHeader,
  ReviewsGrid,
  ReviewCard,
  ReviewHeader,
  ReviewAvatar,
  ReviewAuthor,
  Stars,
  ReviewContent,
  AllReviewsLink
} from './Reviews.styles';
import Container from '../common/Container';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Reviews = () => {
  // Placeholder reviews - would be replaced with actual Google reviews
  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      date: '2 months ago',
      rating: 5,
      content: 'Absolutely love this pet store! The staff is incredibly knowledgeable about aquariums and helped me set up the perfect environment for my new goldfish. Their selection of fish and tanks is impressive, and prices are fair. Highly recommend!'
    },
    {
      id: 2,
      author: 'Michael Rodriguez',
      date: '1 month ago',
      rating: 5,
      content: 'Great place for bird supplies and advice. I bought my first parakeet here and the team was so helpful in guiding me through proper care. The store is clean and well-organized, and they clearly care about the animals they sell.'
    },
    {
      id: 3,
      author: 'Emma Wilson',
      date: '3 weeks ago',
      rating: 4,
      content: 'Picked up a hamster for my daughter and we couldn\'t be happier. The staff took time to educate us on proper care, and had all the supplies we needed in one place. The only reason for 4 stars instead of 5 is that they were out of the specific hamster wheel we wanted.'
    }
  ];
  
  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  };
  
  return (
    <ReviewsSection>
      <Container>
        <ReviewsHeader>
          <h2>Customer Reviews</h2>
          <p>
            Don't just take our word for it - see what our customers have to say about their experiences with Eco-Pets & Aquariums.
          </p>
        </ReviewsHeader>
        
        <ReviewsGrid>
          {reviews.map((review) => (
            <ReviewCard key={review.id}>
              <ReviewHeader>
                <ReviewAvatar>
                  {getInitials(review.author)}
                </ReviewAvatar>
                <ReviewAuthor>
                  <h3>{review.author}</h3>
                  <p>{review.date}</p>
                </ReviewAuthor>
              </ReviewHeader>
              
              <Stars>
                {renderStars(review.rating)}
              </Stars>
              
              <ReviewContent>
                <p>"{review.content}"</p>
              </ReviewContent>
            </ReviewCard>
          ))}
        </ReviewsGrid>
        
        <AllReviewsLink>
          <a href="https://www.google.com/search?sca_esv=955177219d80cd60&sxsrf=AHTn8zrOwElKJFtL_L3I07ShjmBlw23bdA:1745250395689&si=APYL9btvhO6SAb8jF9HqTZMMa7vs_teLnZaEVrJZwRKFIIKjoQ04ObnRlMmDnO6cjzzwIX7Fozn_Ai5CPUY3WxVug3GKBWThKBZyvqRR8cvrKqpJFALidg_PxEOc0RxLISadqa3-7352_zuw722_kv8RJflfY-vslg%3D%3D&q=Eco-Pets+and+Aquariums+Reviews&sa=X&ved=2ahUKEwia-4OvvOmMAxXlWUEAHYhrDdIQ0bkNegQIOxAE&biw=1763&bih=934&dpr=1" target="_blank" rel="noopener noreferrer">
            See all Google reviews <ArrowRightIcon />
          </a>
        </AllReviewsLink>
      </Container>
    </ReviewsSection>
  );
};

export default Reviews;