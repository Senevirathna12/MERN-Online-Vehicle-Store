/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";


const Welcome = () => {
  return (
    <div className="p-2 bgc">
      <div className="bgivehicle">
        <div className="container">
          <p className="text-4xl font-bold my-4 p2">Welcome</p>
          <p className="text-4xl font-bold my-2 p3">to</p>
          <p className="text-5xl font-bold my-2 p4">ANS Vehicle Store</p>
          <p className="text-2xl my-4 p1">
            Find your dream vehicle here...
          </p>
          <Row gutter={[16, 16]}>
            <Col lg={12} xs={24} className="text-center">
              <button className="p-2 bg-sky-300 my-20 w-40 text-black btn1 boldtext">
                <Link to={"/admins/adminlogin"}>Admin Login</Link>
              </button>
            </Col>
            <Col lg={12} xs={24} className="text-center">
              <button className="p-2 bg-sky-300 my-20 w-40 text-black btn1 boldtext">
                <Link to={"/users/login"}>User Login</Link>
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
