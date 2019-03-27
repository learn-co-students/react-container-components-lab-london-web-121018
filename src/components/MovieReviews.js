// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) =>
  <ul className="review-list">
    {reviews.map((review, idx) =>
       <li key={idx} className="review">
        <h3>{review.display_title}</h3>
        <p>{review.summary_short}</p>
      </li>
    )}
  </ul>

export default MovieReviews
