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
                 this.state.shows.length ?
                 this.state.shows.map(show => {
                     return (
                         <Intro key={show.id} id={show.id} title={show.title} />
                     );
                 }) :
                 <Loading />
                }
            </div>
        );
    }
}
