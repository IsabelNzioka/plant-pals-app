import React, { useState, useEffect } from "react";
// import plants from "../../../dev-data/data";
import axios from "axios";

import { Link } from "react-router-dom";

import "./Plant.css";

const Plant = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const { data } = await axios.get("/api/products");
      setPlants(data);
    };
    fetchPlants();
  }, []);

  return (
    <div className="Card">
      {plants.map((plant) => {
        return (
          <div className="CardContent">
            <Link to={`/plants/${plant._id}`} key={plant._id}>
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
      })}
    </div>
  );
};

export default Plant;
