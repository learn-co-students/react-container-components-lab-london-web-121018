import React, { Component } from 'react';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9c7Gcs0h9xjzstByaUB4HomD35RmtUnF';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: [],
    };

    fetchReviews = () => {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState(
                {reviews: data.results}
            ))
    };

    componentDidMount() {
        this.fetchReviews()
    };

    render () {
        return (
            <div className= 'latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    };
};