import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import i1 from "../assets/2151806280.jpg";
import i2 from "../assets/2151806281.jpg";
import i3 from "../assets/2151806350.jpg";

const Slider = () => {
  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="w-full h-[700px] object-cover" src={i1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px] object-cover" src={i2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px] object-cover" src={i3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
