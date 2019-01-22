
import summer4 from './coverImages/summer4.jpeg';
import AmandaAW2018 from './coverImages/AmandaAW2018.png';
import TaniaDenim18 from './coverImages/TaniaDenim18.jpg';
import Men18 from './coverImages/Men18.jpg';
import SessionStyling18 from './coverImages/SessionStyling18.jpg';
import ParisStage from './coverImages/ParisStage.jpg';


export default function getGallery() {
    return [
        {id:'SS collection 2018', name:'SS collection 2018', logo: summer4},
        {id:'AW collection 2018', name:'AW collection 2018', logo: AmandaAW2018},
        {id:'Denim collection 2018', name:'Denim collection 2018', logo: TaniaDenim18},
        {id:'Men collection 2018', name:'Men collection', logo: Men18},
        {id:'Session styling 18', name:'Session styling', logo: SessionStyling18},
        {id:'ParisStage', name:'ParisStage', logo: ParisStage},
        
    ];
}