// Code MovieReviews Here
import React from 'react';

const Review = ({
  headline,
  byline,
  display_title,
  summary_short
}) => {
  return (
      <div className="review">
        <h2 className="headline">{headline}</h2>
        <h3 className="byline">{byline}</h3>
        <h3 className="title">{display_title}</h3>
          <p className="summary">{summary_short}</p>
      </div>
  );


}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews;
