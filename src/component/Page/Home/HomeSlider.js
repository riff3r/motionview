import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImage = [
  "https://motionview.com.bd/_next/image?url=https%3A%2F%2Fapi.motionview.com.bd%2Fstorage%2Fimages%2Fbanners%2Fslider%2F165820614642.haylou%20all%20product%20banner.webp&w=2048&q=75",
  "https://motionview.com.bd/_next/image?url=https%3A%2F%2Fapi.motionview.com.bd%2Fstorage%2Fimages%2Fbanners%2Fslider%2F165820594581.amazfit%20all%20watch%20website%20.webp&w=2048&q=75",
  "https://motionview.com.bd/_next/image?url=https%3A%2F%2Fapi.motionview.com.bd%2Fstorage%2Fimages%2Fbanners%2Fslider%2F165823288299.all%20phone%20website%20slider%20v2.webp&w=2048&q=75",
];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="mb-16" {...settings}>
      {sliderImage.map((slide, i) => (
        <div key={i}>
          <img src={slide} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
