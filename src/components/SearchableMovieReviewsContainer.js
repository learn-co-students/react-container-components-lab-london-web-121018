import React, { Component } from 'react';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9c7Gcs0h9xjzstByaUB4HomD35RmtUnF';


// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    
    
    state = {
        reviews: [],
        searchTerm: ''
    };

    fetchReviews = () => {
        URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`
        + `api-key=${NYT_API_KEY}`;
        
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState(
                {reviews: data.results}
            ))
    };

    handleInput = event => {
        this.setState({searchTerm: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.fetchReviews();
    };

    render () {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput}></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    };
};