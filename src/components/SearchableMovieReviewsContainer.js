import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const baseURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`
const KEY = `&api-key=SPUIWmB1nvsIzKPcPQGocRHmsmBuhG4h`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }


handleChange = (event) => {
  const query = event.target.value
  this.setState({ searchTerm: query})
}

handleSubmit = (event) => {
  event.preventDefault();
  fetch(`${baseURL}${this.state.searchTerm}${KEY}`)
  .then(resp => resp.json())
  .then(data => this.setState ({ reviews: data.results}))
}

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.searchTerm} placeholder="Search a Review"/>
        <button>Search</button>
        </form>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
