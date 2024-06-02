/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const DefaultLayoutUser = (props) => {
  const navigate = useNavigate();

  const items = [
  

    {
      key: "1",
      label: <li onClick={() => navigate("/users/login")}>Logout</li>,
    },
  ];
  return (
    <div>
      <div className="header bs1">
        <div className="d-flex justify-content-between">
          <div className="logo">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/996/180/original/ans-logo-ans-letter-ans-letter-logo-design-initials-ans-logo-linked-with-circle-and-uppercase-monogram-logo-ans-typography-for-technology-business-and-real-estate-brand-vector.jpg"
              alt="VehicleStore"
            />
          </div>
          <h1>ANS Vehicle Store</h1>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
          >
            <Button className="headerbtn">
              Log Out
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayoutUser;
