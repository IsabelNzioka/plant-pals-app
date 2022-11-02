import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

// import plants from "../../../dev-data/data";
import { listProductDetails } from "../../../actions/productActions";

import Loader from "../../Loader";
import Message from "../../Message";
import "./PlantScreen.css";

// import axios from "axios";

import Sliderr from "../Slider/Slider";
const PlantScreen = () => {
  const params = useParams();
  // const plant = plants.find((p) => p._id === params.id);
  // const [plant, setPlant] = useState({});

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
    // const fetchPlant = async () => {
    //   const { data } = await axios.get(`/api/products/${params.id}`);
    //   setPlant(data);
    // };
    // fetchPlant();
  }, [dispatch, params.id]);

  console.log(">>>>>>>>>>>>>>>>>>", product.image);

  return (
    <div className="Plant">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="PlantInfomation">
          <div className="PlantImage">
            <Sliderr />
            {/* <h1>Hi</h1> */}
            {/* {product.image}{" "} */}
          </div>
          <div className="PlantDetails">
            <div className="NamePrice">
              <h1>{product.name}</h1>
              <h4>${product.price}</h4>
            </div>

            <hr />
            <h5>{product.countInStock} available</h5>
            <p className="Paragraph">{product.summary}</p>
            <p>Choose color</p>
            <div className="Colors">
              <div className="One1"></div>
              <div className="two1"></div>
              <div className="three1"></div>
            </div>
            <input type="text" placeholder="qty" />
            <button className="Button">ADD TO CART</button>
            <p>
              <strong>Care: </strong> {product.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantScreen;

// <div className="PlantInfomation">
// <div className="PlantImage">s
//   {/* <Sliderr image={product.image} /> */}
//   {product.image[0]}{" "}
// </div>
// <div className="productDetails">
//   <div className="NamePrice">
//     <h1>{product.name}</h1>
//     <h4>${product.price}</h4>
//   </div>

//   <hr />
//   <h5>{product.countInStock} available</h5>
//   <p className="Paragraph">{product.summary}</p>
//   <p>Choose color</p>
//   <div className="Colors">
//     <div className="One1"></div>
//     <div className="two1"></div>
//     <div className="three1"></div>
//   </div>
//   <input type="text" placeholder="qty" />
//   <button className="Button">Add to Cart</button>
//   <p>
//     <strong>Care: </strong> {product.care}
//   </p>
// </div>
// </div>
