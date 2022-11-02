import React, { useState, useEffect } from "react";
// import plants from "../../../dev-data/data";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { listProducts } from "../../../actions/productActions";
import Loader from "../../Loader";
import Message from "../../Message";

import "./Plant.css";

const Plant = () => {
  // const [plants, setPlants] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
    // const fetchPlants = async () => {
    //   const { data } = await axios.get("/api/products");
    //   setPlants(data);
    // };
    // fetchPlants();
  }, [dispatch]);

  return (
    <div className="Card">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error} </Message>
      ) : (
        products.map((plant) => {
          return (
            <div className="CardContent">
              <Link to={`/product/${plant._id}`} key={plant._id}>
                <div className="CardImage">
                  <img
                    src={plant.image[0]}
                    alt={plant.name}
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </div>
                <div className="CardDetails">
                  <h5>{plant.name}</h5>
                  <h4>${plant.price}</h4>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Plant;
