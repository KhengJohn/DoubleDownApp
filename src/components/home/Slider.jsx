import React from "react";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slideBase,
} from "../../common/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";


const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};
const imageData = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
];
const Slider = () => {
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper"
        effect="fade" // Set effect to fade
        fadeEffect={{ crossFade: true }} // Enable cross fade effect
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {imageData.map((items, index) => (
          <SwiperSlide key={index}>
            <img
              src={items}
              alt="logo"
              style={{
                width: items === slide2 ? "600px" : "300px",
                height: "300px",
                display: "flex",
                margin: "auto",
              }}
              className="floating-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <img
          src={slideBase}
          alt="logo"
          style={{
            width: "400px",
            height: "300px",
            position: "absolute",
            bottom: "0",
            left: "36vw",
          }}
        />
      </div>
    </>
  );
};

export default Slider;
