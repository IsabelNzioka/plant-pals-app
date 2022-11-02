import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

// import plants from "../../../dev-data/data";
import { listProductDetails } from "../../../actions/productActions";

import Loader from "../../Loader";
import Message from "../../Message";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SampleNextArrow from "./Arrows/SampleNextArrow";
import SamplePrevArrow from "./Arrows/SamplePrevArrow";

import "./Slider.css";

// import plants from "../../../dev-data/data";

const Sliderr = (props) => {
  const params = useParams();

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params.id]);

  // const customPaging = () => {
  //   return (
  //     <div></div>
  //   )
  // }

  // dotsClass: "slick-dots slick-thumb",

  const settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots custom-indicator",
    speed: 200,
    infinite: true,
    customPaging: function (i) {
      return (
        <div className="SlideDots">
          <img src={product.image[i]} alt="" />
        </div>
      );
    },
  };

  return (
    <div className="Sliderr">
      {product.image && (
        <Slider {...settings} className="Slide">
          {product.image.map((plant) => (
            <div className="Slider">
              <img src={plant} alt={plant} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Sliderr;

/*
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

product.image && console.log("product", product.image);

return (
  <div>
    <div className="Sliderr">
      {product.image && (
        <Slider {...settings}>
          {product.image.map((plant) => (
            <div className="Slider" key={plant}>
              <img src={plant} alt={plant} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  </div>
);

*/
