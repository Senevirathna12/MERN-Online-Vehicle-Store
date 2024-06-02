/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";

const DeleteVehicle = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteVehicle = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/vehicles/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happend.Please Check console");
        console.log(error);
      });
  };

  return (
    <DefaultLayout className="p-4">
      <BackButton />
      <h2 className="text-3x1 my-4 text-center bs1">Delete Vehicle</h2>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-sky-400 rounded-x1 w-[600px] p-8 mx-auto">
        <h3 className="text-2x1">
          Are you sure you want to delete this vehicle?
        </h3>

        <button
          className="p-4 bg-red-300 m-8 text-white w-full"
          onClick={handleDeleteVehicle}
        >
          Yes, Delete it
        </button>
      </div>
    </DefaultLayout>
  );
};

export default DeleteVehicle;
