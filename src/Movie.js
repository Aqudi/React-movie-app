import React, { Component } from 'react';
import PropTypes from "prop-types"
import "./Movie.css"

class Movie extends Component {
    render() {
        return (
            <div class="movie">
                <img src={this.props.poster} title={this.props.title}  alt={this.props.title}></img>
                <div class="movie_data">
                    <h3 class="movie_title">{this.props.title}</h3>
                    <h5 class="movie_year">{this.props.year}</h5>
                    <p class="movie_summary">{this.props.summary.slice(0, 140)} ...</p>
                    <ul class="movie_genres"> 
                        {this.props.genres.map((genre, index) => 
                            <li key={index} class="genres_genre">{genre}</li>
                        )} 
                    </ul>
                </div>
            </div>  
        );
    }
}

Movie.propTypes  = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;