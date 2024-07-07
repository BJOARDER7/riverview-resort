import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.jpg';
import slider3 from '../../../assets/slider3.jpg';
import slider4 from '../../../assets/slider4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Slider = () => {
  return (
    <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={slider1} /></SwiperSlide>
      <SwiperSlide><img src={slider2} /></SwiperSlide>
      <SwiperSlide><img src={slider3} /></SwiperSlide>
      <SwiperSlide><img src={slider4} /></SwiperSlide>
      
    </Swiper>
    
</div>
  );
};

export default Slider;