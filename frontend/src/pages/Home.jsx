/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import DefaultLayout from "../components/DefaultLayout";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/vehicles")
      .then((response) => {
        setVehicles(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <DefaultLayout className="p-4 ">
      <div className="flux justify-between items-center bgc ">
        <h2 className="text-3xl my-8 text-center bs1">Vehicles List</h2>
        <div className="flex items-center">
          <Link to="/vehicles/create">
            <MdOutlineAddBox className="text-blue-500 text-4xl" />
            <label className="text-blue-500 mx-1">Add</label>
          </Link>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing bgi-right">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md text-center">
                No
              </th>
              <th className="border border-slate-600 rounded-md text-center">
                Image
              </th>
              <th className="border border-slate-600 rounded-md text-center">
                Brand
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden text-center">
                Type
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden text-center">
                Quantity
              </th>

              <th className="border border-slate-600 rounded-md text-center">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={vehicle._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center bgc">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center vertical-center bgc">
                  <img
                    src={vehicle.image}
                    alt={vehicle.brand}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </td>

                <td className="border border-slate-700 rounded-md text-center ">
                  {vehicle.brand}
                </td>

                <td className="border border-slate-700 rounded-md text-center max-md:hidden ">
                  {vehicle.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden ">
                  {vehicle.quantity}
                </td>
                <td className="border border-slate-700 rounded-md text-center ">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/vehicles/details/${vehicle._id}`}>
                      <BsInfoCircle className="text-2xl text-green-400" />
                    </Link>

                    <Link to={`/vehicles/edit/${vehicle._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-500" />
                    </Link>

                    <Link to={`/vehicles/delete/${vehicle._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-800" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DefaultLayout>
  );
};

export default Home;