// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

 import '../styles/Swipecard.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import BlogCard from './BlogCard';

const SwipeCard = () => {
    return (
        <div className="w-md h-48">
            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><BlogCard/> </SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
      </Swiper>  
        </div>
    );
};

export default SwipeCard;