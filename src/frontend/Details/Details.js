
import React from 'react';
import { Redirect } from 'react-router-dom';
import './Details.css';
//mport getGallery from '../Gallery-get';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = { gallery: {} };
    }

    componentDidMount() {
        fetch('/rest/intro')
            .then(response => response.json())
            .then(intro => {
                let galleryId = this.props.match.params.galleryId;
                let gallery = intro.find(gallery => gallery.id === galleryId);
                this.setState({ gallery });
            });
    }

    render() {
        let gallery = this.state.gallery;
        if (gallery) {
            return gallery.id ?
                <DetailsContent gallery={gallery} /> :
                <div />;
        } else {
            return <Redirect to='/not-found' />;
        }
    }
}

function DetailsContent({ gallery }) {
    return (
        <div className='details'>
            <h1>(gallery.title)</h1>
            <div className='details-content'>
                <h3 className='details-content-synopsis'>
                    {gallery.synopsis}
                </h3>
                <div className='details-content-cover'>
                    <img
                        src={require(`../common/images/${gallery.id}.jpg`)}
                        alt={gallery.title} />
                </div>
            </div>
        </div>
    )
}