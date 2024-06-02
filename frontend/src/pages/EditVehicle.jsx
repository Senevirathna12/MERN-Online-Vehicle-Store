/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";

const EditVehicle = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(0);
  const [colors, setColors] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [itemNo, setItemNo] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/vehicles/${id}`)
      .then((response) => {
        const { brand, price, title, image, year, colors, quantity, itemNo } =
          response.data;
        setBrand(brand);
        setPrice(price);
        setTitle(title);
        setImage(image);
        setYear(year);
        setColors(colors);
        setQuantity(quantity);
        setItemNo(itemNo);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check the console.");
        console.log(error);
      });
  }, [id]);

  const handleEditVehicle = () => {
    const data = {
      brand,
      price,
      title,
      image,
      year,
      colors,
      quantity,
      itemNo,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/vehicles/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check the console.");
        console.log(error);
      });
  };

  const pageStyle = {
    display: "flex",
    justifyContent: "right",
    alignItems: "left",
    height: "80vh", 
    backgroundSize: "contain",
    backgroundPosition: "left",
    backgroundImage: `url(${image})`,
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
    <DefaultLayout className="p-4">
      <BackButton my-2 />
      <label className="mx-3">Back</label>
      <h2 className="text-3x1 my-2 text-center bs1">Edit Vehicle</h2>

      <div style={pageStyle}>
        {loading ? <Spinner /> : ""}

        <div style={detailsStyle}>
          <h2 className="edith2">Edit</h2>
          <div className="my-4">
            <label className="text-xl boldtext">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
          <div className="my-4">
            <label className="text-xl  boldtext">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4  boldtext">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
          <div className="my-4">
            <label className="text-xl  boldtext">Image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
          <div className="my-4">
            <label className="text-xl  boldtext">Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
          <div className="my-4">
            <label className="text-xl  boldtext">Colors</label>
            <input
              type="text"
              value={colors.join(", ")}
              onChange={(e) => setColors(e.target.value.split(", "))}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
          <div className="my-4">
            <label className="text-xl  boldtext">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
          <div className="my-4">
            <label className="text-xl  boldtext">Item No</label>
            <input
              type="text"
              value={itemNo}
              onChange={(e) => setItemNo(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
          <button
            className="p-2 bg-sky-300 m-8 btn1 boldtext"
            onClick={handleEditVehicle}
          >
            Save
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default EditVehicle;
