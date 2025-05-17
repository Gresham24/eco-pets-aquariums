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
      author: 'Sarah Mitchell',
      date: '11 months ago',
      rating: 5,
      content: 'Absolutely amazing experience! The staff here are incredibly knowledgeable and always go above and beyond to help. Whether I am looking for supplies for my tropical fish or need advice about my reptile setup, they have the expertise and patience to guide me. Their selection of products is impressive, and I love that I can find everything I need for all my pets in one place.'
    },
    {
      id: 2,
      author: 'James Wilson',
      date: '12 months ago',
      rating: 5,
      content: 'I recently visited their new shop and was blown away by the service. The staff member who helped me was incredibly attentive and took the time to understand exactly what I needed for my aquarium. The store is beautifully organized, and they have an excellent selection of both common and specialty items. Will definitely be coming back!'
    },
    {
      id: 3,
      author: 'Emma Thompson',
      date: '1 year ago',
      rating: 4,
      content: "What a fantastic pet store! The new location is spacious, well-lit, and impeccably organized. Their prices are very competitive, and they stock everything from basic supplies to specialized equipment. The staff are the real highlight though - so friendly and knowledgeable. I particularly appreciate how they take the time to explain things and make sure you're getting exactly what you need. It's rare to find a pet store that combines great products with such excellent customer service."
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
          <a href="#" rel="noopener noreferrer">
            See all Google reviews <ArrowRightIcon />
          </a>
        </AllReviewsLink>
      </Container>
    </ReviewsSection>
  );
};

export default Reviews;