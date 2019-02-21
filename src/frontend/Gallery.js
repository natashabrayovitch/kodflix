import React, { Component } from 'react';
import Intro from './Intro';
//import getGallery from './Gallery-get';


export default class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            videos: []
        }
    }
    componentDidMount() {
        fetch('/rest/intro')
            .then(function (response) {
                return response.json();
            })
            .then(function (videos) {
                this.setState({ videos: videos })
            });
    }
    render() {
        return (
            <div>
                <div className="container">
                    {
                        this.state.videos.map(video => (
                            <Intro id={video.id} name={video.name} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

