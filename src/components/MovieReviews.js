// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {

    const reviews = () => props.reviews.map( review => <li key={review.display_title} className='review'>{review.display_title}</li>);

    return (
        <ul className='review-list'>{reviews()}</ul>
    );
};

export default MovieReviews;