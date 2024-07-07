import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.jpg';
import slider3 from '../../../assets/slider3.jpg';

const Slider = () => {
  return (
    <Carousel>
                <div>
                    <img src={slider1} />
                    <p className="legend">Please Join RiverView Cafe</p>
                </div>
                <div>
                    <img src={slider2} />
                    <p className="legend">Vacation time tour Resort</p>
                </div>
                <div>
                    <img src={slider3} />
                    <p className="legend">Honeymoon tour in Resort</p>
                </div>
            </Carousel>
  );
};

export default Slider;