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

  console.log(product);

  return (
    <div className="Plant">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : product ? (
        <Sliderr image={product.image} />
      ) : (
        <h1>Hi</h1>
      )}
    </div>
  );
};

export default PlantScreen;
