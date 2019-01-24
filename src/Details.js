
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './Gallery-get';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            gallery: {}
        };
    }

    componentDidMount() {
        let galleryId = this.props.match.params.galleryId
        let gallery = getGallery()
        .find((gallery) => gallery.id === galleryId);
        this.setState({ gallery });
   }

    render() {
        if(this.state.gallery === undefined) {
            return <Redirect to='/not-found' />
        } else {
        return (
            <div>
                <h1>{this.state.gallery.name}</h1>
                <img
                    src={this.state.gallery.logo}
                    alt={this.state.gallery.name} />
                <Link to='/'>Back to home page</Link>
                </div>
        );
        }
    }
}