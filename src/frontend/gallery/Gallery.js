import React from 'react';
import './Gallery.css';
import Intro from './cover/Intro';
import Loading from '../common/loading/Loading';
//import getGallery from './Gallery-get';


export default class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {intros: []}
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
                 this.state.intros.length ?
                 this.state.intros.map(intro => {
                     return (
                         <Intro key={intro.id} id={intro.id} title={intro.title} />
                     );
                 }) :
                 <Loading />
                }
            </div>
        );
    }
}
