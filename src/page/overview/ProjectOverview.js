import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, Zoom } from "swiper";

import "./clientReview.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";

import Slider from "./Slider_1";
import Slider2 from "./Slider_2";

const ProjectOverview = () => {
  return (
    <div className="bg-slate-700 md:h-screen flex justify-center items-center">
      <Swiper
        spaceBetween={35}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          // disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        // centeredSlides={true}

        // navigation={true}
      >
        <SwiperSlide>
          <Slider></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider2></Slider2>
        </SwiperSlide>
        <SwiperSlide>
          <Slider></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider2></Slider2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectOverview;
