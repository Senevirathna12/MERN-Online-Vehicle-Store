/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import DefaultLayout from "../components/DefaultLayout";

import Spinner from "../components/Spinner";

const ShowVehicle = () => {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/vehicles/${id}`)
      .then((response) => {
        setVehicle(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const pageStyle = {
    display: "flex",
    justifyContent: "right",
    alignItems: "left",
    height: "90vh",
    backgroundSize: "contain",
    backgroundPosition: "left",
    backgroundImage: `url(${vehicle.image})`,
    backgroundRepeat: "no-repeat",
  };

  const detailsStyle = {
    backgroundColor: "rgba(173, 216, 230, 0.8)",
    padding: "16px",
    borderRadius: "4px",
    width: "400px",
    textAlign: "left",
    color: "black",
    maxHeight: "80vh",
    overflow: "auto",
  };

  return (
    <DefaultLayout className="p-2 bgc ">
      <BackButton my-2 />
      <label className="mx-3">Back</label>
      <h2 className="text-3x1 my-2 text-center bs1">Show Vehicle</h2>
      <div style={pageStyle}>
        {loading ? (
          <Spinner />
        ) : (
          <div style={detailsStyle}>
            <h2 className="detailsh2">Details</h2>
            <div className="my-4">
              <span className="text-x1 boldtext">ID:</span>
              <br />
              <hr />
              <span>{vehicle._id}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Brand:</span>
              <br />
              <hr />
              <span>{vehicle.brand}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Price(LKR:):</span>
              <br />
              <hr />
              <span>{vehicle.price}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Title:</span>
              <br />
              <hr />
              <span>{vehicle.title}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Year:</span>
              <br />
              <hr />
              <span>{vehicle.year}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Colors:</span>
              <br />
              <hr />
              <span>{vehicle.colors && vehicle.colors.join(", ")}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Quantity:</span>
              <br />
              <hr />
              <span>{vehicle.quantity}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Item No:</span>
              <br />
              <hr />
              <span>{vehicle.itemNo}</span>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default ShowVehicle;
