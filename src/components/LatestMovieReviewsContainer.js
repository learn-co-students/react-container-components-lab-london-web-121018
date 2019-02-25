import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'yJWMTc0mYGc4YFtLD0VCdwFpBvadGG3m';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <h1>The latest reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default LatestMovieReviewsContainer;
