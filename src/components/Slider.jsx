import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import i1 from "/assets/img-1683008098750.jpg";
import i2 from "/assets/ginger-cat-in-sweater-free-image.jpg";
import i3 from "/assets/istockphoto-122947916-612x612_imgupscaler.ai_General_4K.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={i1}
              alt="A dog being groomed"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={i2}
              alt="A cat wearing a cute winter sweater"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={i3}
              alt="A dog and cat cuddling together"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
