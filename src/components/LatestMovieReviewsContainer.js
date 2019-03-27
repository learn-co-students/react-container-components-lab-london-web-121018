import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=SPUIWmB1nvsIzKPcPQGocRHmsmBuhG4h`

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: []
    };
  }

componentDidMount(){
  fetch(URL)
  .then(resp => resp.json())
  .then(data => this.setState({ reviews: data.results }));
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
