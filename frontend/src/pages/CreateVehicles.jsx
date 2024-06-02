/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";

const CreateVehicles = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(20);
  const [colors, setColors] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [itemNo, setItemNo] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveVehicle = () => {
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
      .post("http://localhost:5555/vehicles", data)
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

  return (
    <DefaultLayout className="p-4 ">
      <BackButton />
      <h2 className="text-3xl my-4 text-center bs1">Create Vehicle</h2>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-sky-400 rounded-xl w-[600px] p-4 mx-auto bgi-right">
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          style={{ width: "100%", height: "100%" }}
          alt="VehicleStore"
        />
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Image</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </div>
        {/* Input for colors (assuming comma-separated string) */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Colors</label>
          <input
            type="text"
            value={colors.join(", ")}
            onChange={(e) => setColors(e.target.value.split(", "))}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Item No</label>
          <input
            type="text"
            value={itemNo}
            onChange={(e) => setItemNo(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </div>
        <button className="p-2 bg-sky-300 m-8 btn1" onClick={handleSaveVehicle}>
          Save
        </button>
      </div>
    </DefaultLayout>
  );
};

export default CreateVehicles;
