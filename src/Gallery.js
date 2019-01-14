import React from 'react';
import Intro from './Intro';
import summer1 from './coverImages/summer1.jpeg';
import summer2 from './coverImages/summer2.jpeg';
import summer3 from './coverImages/summer3.jpeg';
import summer4 from './coverImages/summer4.jpeg';
import summer5 from './coverImages/summer5.jpeg';
import summer6 from './coverImages/summer6.jpeg';

export default function Gallery() {
    return (
        <div>
            <div className='container'>
                <Intro id='Queen' name='Queen' logo={summer1} />
                <Intro id='Milke' name='Milke' logo={summer2} />
                <Intro id='Julia' name='Julia' logo={summer3} />
                <Intro id='Yulia' name='Yulia' logo={summer4} />
                <Intro id='Eva' name='Eva' logo={summer5} />
                <Intro id='Emma' name='Emma' logo={summer6} />
            </div>
        </div>
    )
}