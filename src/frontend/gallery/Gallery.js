import React from 'react';
import './Gallery.css';
import Intro from './cover/Intro';
import Loading from '../common/loading/Loading';
//import getGallery from './Gallery-get';


export default class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {intro: []}
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
                 this.state.videos.length ?
                 this.state.videos.map(show => {
                     return (
                         <Intro key={videos.id} id={videos.id} title={videos.title} />
                     );
                 }) :
                 <Loading />
                }
            </div>
        );
    }
}
