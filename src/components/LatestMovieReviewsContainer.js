import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'k98o5e0F1GZ1K8eU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends Component {
    
    state ={
        reviews: [],
    }



componentDidMount(){
    fetch(`${URL}`)
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        //     this.setState({
        //     reviews: resp
        // })
        
    }
}

