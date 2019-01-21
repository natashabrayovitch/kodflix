
import AmandaAW2018 from './coverImages/AmandaAW2018.png';
import summer2 from './coverImages/summer2.jpeg';
import JinglesVB from './coverImages/JinglesVB.png';
import summer4 from './coverImages/summer4.jpeg';
import PsychoCover from './coverImages/PsychoCover.jpg';
import summer6 from './coverImages/summer6.jpeg';

export default function getGallery() {
    return [
        {id:'AW collection 2018', name:'AW collection 2018', logo: AmandaAW2018},
        {id:'Milke', name:'Milke', logo: summer2},
        {id:'JinglesVB', name:'JinglesVB', logo: JinglesVB},
        {id:'SS collection 2018', name:'SS collection 2018', logo: summer4},
        {id:'Psycho', name:'Psycho', logo: PsychoCover},
        {id:'Emma', name:'Emma', logo: summer6}
    ];
}