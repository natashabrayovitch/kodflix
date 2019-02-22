import React from 'react';
import './Gallery.css';
import Intro from './cover/Intro';
//import getGallery from './Gallery-get';


export default class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            intro: []
        }
    }
    componentDidMount() {
        fetch('/rest/Intro')
            .then(response => response.json())
            .then(Intro => this.setState({ Intro }));
    }
    render() {
        return (
            <div className="gallery">
                {
                    this.state.intro.map(video => {
                        return (
                            <Intro key={video.id} id={video.id} name={video.name} />
                        );
                    })
                }
            </div>
        );
    }
}
