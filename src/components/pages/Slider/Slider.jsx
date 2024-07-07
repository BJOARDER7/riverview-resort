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
      spaceBetween={24}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='w-24 md:w-96' src={slider1} /></SwiperSlide>
      <SwiperSlide><img className='w-24 md:w-96' src={slider2} /></SwiperSlide>
      <SwiperSlide><img className='w-24 md:w-96' src={slider3} /></SwiperSlide>
      <SwiperSlide><img className='w-24 md:w-96' src={slider4} /></SwiperSlide>
      
    </Swiper>
    
</div>
  );
};

export default Slider;