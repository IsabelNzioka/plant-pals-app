import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../../actions/productActions";

import Loader from "../../Loader";
import Message from "../../Message";
import "./PlantScreen.css";
import Sliderr from "../Slider/Slider";

const PlantScreen = () => {
  const [qty, setQty] = useState(1);

  const params = useParams();
  const navigate = useNavigate();
  // const plant = plants.find((p) => p._id === params.id);
  // const [plant, setPlant] = useState({});

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params.id]);

  const addToCartHandler = () => {
    navigate(`/cart/${params.id} ? qty=${qty}`);
  };

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
            <label for="qty-select">Qty</label>
            <select
              name="quantity"
              id="qty-select"
              className="Button"
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>

            {product.countInStock === 0 ? (
              <button className="DisButton" disabled="true">
                Out of stock
              </button>
            ) : (
              <button className="Button" onClick={addToCartHandler}>
                {" "}
                ADD TO CART
              </button>
            )}

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
