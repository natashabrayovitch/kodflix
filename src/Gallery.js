import React from 'react';
import Intro from './Intro';
import getGallery from './Gallery-get';

export default function Gallery() {
    return (
        <div>
            <div className='container'>
            {
             getGallery().map(intro => (
             <Intro
                key={intro.id}
                id={intro.id} 
                name={intro.name} 
                logo={intro.logo} />
                ))
            }
            </div>
        </div>
    );
}