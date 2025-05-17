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
      author: 'Caitlin Fourie',
      date: '11 months ago',
      rating: 5,
      content: 'Patrick is the best! He is friendly, super knowledgeable and always helpful and offers valuable advice for any weird and wonderful question I might have. They offer a wide range of products so I can go to one store for all my animals, from dogs to axolotls.'
    },
    {
      id: 2,
      author: 'Stephanie Holloway',
      date: '12 months ago',
      rating: 5,
      content: 'It was a pleasure dealing with Nicky, the shop from home looks fabulous and she had a variety of stock which I could choose from, thank you again.'
    },
    {
      id: 3,
      author: 'Richard Hagan',
      date: '1 year ago',
      rating: 4,
      content: "The new location is well presented, neat and well stocked. It's a substantial improvement over the previous store. Pricing is very reasonable and they have everything an aquarist could need. Most of all, I am very fond of the staff, particularly the lady who runs the store. She's so friendly, accommodating and humble. Always a pleasure doing business with her and I will certainly continue to support them. I hope that the rest of our community does the same."
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