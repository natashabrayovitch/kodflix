import React, { Component } from 'react';
import Intro from './Intro';
//import getGallery from './Gallery-get';


export default class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        fetch('/rest/intro')
            .then(function (response) {
                return response.json();
            })
            .then(function (movies) {
                this.setState({ movies: movies })
            });
    }
    render() {
        return (
            <div>
                <div className="container">
                    {
                        this.state.movies.map(movie => (
                            <Intro id={movie.id} name={movie.name} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

