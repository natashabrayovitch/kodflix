
import summer1 from './coverImages/summer1.jpeg';
import summer2 from './coverImages/summer2.jpeg';
import summer3 from './coverImages/summer3.jpeg';
import summer4 from './coverImages/summer4.jpeg';
import summer5 from './coverImages/summer5.jpeg';
import summer6 from './coverImages/summer6.jpeg';

export default function getGallery() {
    return [
        {id:'queen', name:'Queen', logo: summer1},
        {id:'milke', name:'Milke', logo: summer2},
        {id:'julia', name:'Julia', logo: summer3},
        {id:'yulia', name:'Yulia', logo: summer4},
        {id:'eva', name:'Eva', logo: summer5},
        {id:'emma', name:'Emma', logo: summer6}
    ];
}