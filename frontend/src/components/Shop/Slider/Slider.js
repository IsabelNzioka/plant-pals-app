import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SampleNextArrow from "./Arrows/SampleNextArrow";
import SamplePrevArrow from "./Arrows/SamplePrevArrow";

import "./Slider.css";

// import plants from "../../../dev-data/data";

const Sliderr = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  console.log("props >>>>>>>>>>>>>>>>>>>", props);
  return (
    <div>
      <div className="Sliderr">
        <Slider {...settings}>
          {props.image.map((plant) => (
            <div className="Slider" key={plant}>
              <img src={plant} alt={plant} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliderr;
