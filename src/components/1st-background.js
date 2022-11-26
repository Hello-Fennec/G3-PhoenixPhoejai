import hill1 from '../Picture/1st-bg-1.png';
import hill2 from '../Picture/1st-bg-1.png';
import gradient from '../Picture/1st-bg-3.png';
import Cloud2 from '../Picture/Cloud2.png';
import Cloud1 from '../Picture/Cloud1.png';
import Cloud3 from '../Picture/Cloud2.png';
import Phoenix from '../Picture/Red-Phoenix.png';
import Headline from '../Picture/Headline.png';
import { positions } from '@mui/system';


function Background1() {
    return(
        
        <div style={{ backgroundImage: `url(${gradient})`,backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"100%",
        position:"relative",
        overflow:"hidden"
        }} className="h-screen">
            <img src={hill1} className="absolute h-[800px] w-[2000px] left-[800px] top-[0px] object-contain" />
            <img src={hill2} className="absolute h-[800px] w-[2000px] left-[-500px] top-[0px] object-contain" />
            <img src={Cloud1} className="absolute h-[924px] left-[-200px] top-[-70px] w-full animate-CloudSlide"/>
            <img src={Cloud2} className="absolute h-[1024px] left-[650px] top-[-400px] w-full animate-CloudSlide"/>
            <img src={Cloud3} className="absolute h-[924px] left-[170px] top-[-50px] w-full animate-CloudSlide"/>
            <img src={Phoenix} className="absolute h-[850px] w-[1200px] left-[250px] top-[-170px] animate-bounce-Y" />
            <img src={Headline} className="absolute h-[540px] w-[1100px] left-[-100px] top-[70px] object-cover" />
        </div>  
    );
}

export default Background1;