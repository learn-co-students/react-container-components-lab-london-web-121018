import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'kglzrGmcpE8uMXJooIh740nmVp8XAuJg';

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
   
   state = {
      reviews: [],
      searchTerm: ''
   }

   fetchMovies = (searchTerm) => {
      fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&` + `api-key=${NYT_API_KEY}`)
         .then(resp => resp.json())
         .then( data => {
            this.setState({
               reviews: data.results
            })
         })
   }

   handleChange = (event) => {
      this.setState({
         searchTerm: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.fetchMovies(this.state.searchTerm);
   }

   render() {
      return (
         <div className="searchable-movie-reviews">
         <form onSubmit={this.handleSubmit}>
            <label htmlFor="search-input">Search Movie Reviews</label>
            <input
               id="search-input"
               type="text"
               style={{ width: 300 }}
               onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
         </form>
         {typeof this.state.reviews === 'object' &&
            this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
         <MovieReviews reviews={this.state.reviews} />
         </div>
      );
   }
}