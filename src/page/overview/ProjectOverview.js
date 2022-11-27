import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, Zoom } from "swiper";

import "./clientReview.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/lazy";
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";

import Slider1 from "./Slider_1";
import Slider2 from "./Slider_2";
import Slider3 from "./Slider_3";
import Slider4 from "./Slider_4";

const ProjectOverview = () => {
  return (
    <div className="bg-slate-700 w-full md:h-screen h-96 flex justify-center items-center">
      <Swiper
        lazy={true}
        speed={600}
        spaceBetween={40}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 70,
          stretch: 50,
          depth: 50,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider1></Slider1>
        </SwiperSlide>
        <SwiperSlide>
          <Slider2></Slider2>
        </SwiperSlide>
        <SwiperSlide>
          <Slider3></Slider3>
        </SwiperSlide>
        <SwiperSlide>
          <Slider4></Slider4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectOverview;
