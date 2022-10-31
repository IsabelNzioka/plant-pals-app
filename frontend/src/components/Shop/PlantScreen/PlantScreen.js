import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

// import plants from "../../../dev-data/data";
import "./PlantScreen.css";

import axios from "axios";

import Sliderr from "../Slider/Slider";
const PlantScreen = () => {
  const params = useParams();
  // const plant = plants.find((p) => p._id === params.id);

  const [plant, setPlant] = useState({});

  useEffect(() => {
    const fetchPlant = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);

      setPlant(data);
    };
    fetchPlant();
  }, [params.id]);

  return (
    <div className="Plant">
      <div className="PlantInfomation">
        <div className="PlantImage">
          <Sliderr image={plant.image} />
        </div>
        <div className="PlantDetails">
          <div className="NamePrice">
            <h1>{plant.name}</h1>
            <h4>${plant.price}</h4>
          </div>

          <hr />
          <h5>{plant.countInStock} available</h5>
          <p className="Paragraph">{plant.summary}</p>
          <p>Choose color</p>
          <div className="Colors">
            <div className="One1"></div>
            <div className="two1"></div>
            <div className="three1"></div>
          </div>
          <input type="text" placeholder="qty" />
          <button className="Button">Add to Cart</button>
          <p>
            <strong>Care: </strong> {plant.care}
          </p>
        </div>
      </div>

      <div className="MorePlants">More</div>
    </div>
  );
};

export default PlantScreen;
