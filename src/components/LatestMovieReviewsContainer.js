import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
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

