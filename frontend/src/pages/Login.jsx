/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Form, Input,message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const data = {
      username,
      password,
    };
    setLoading(true);

    axios
    .post("http://localhost:5555/users/login", data)
    .then((response) => {
      setLoading(false);
      if (response.status === 200) {
        console.log("Login successful");
        message.success("Login successful");
        navigate("/homeusers");
      } else {
        console.error("Login failed with status:", response.status);
        message.error("Login failed");
      }
    })
    .catch((error) => {
      setLoading(false);
      console.error("Error during login:", error);
      message.error("Error during Login");
      
    });
};

  return (
    <div className="login bgc">
      
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <button className="custom-button btn1 my-2">
            <Link to={"/welcome"}>Go Back</Link>
          </button>
          <img
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            style={{ width: "100%", height: "100%" }}
            alt="VehicleStore"
          />
          <h2 className="login-logo">VehicleStore</h2>
        </Col>

        <Col lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5">
            <h2>User Login</h2>
            <hr />

            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <button className="btn1 mt-2 mb-3" onClick={handleLogin}>
            {loading ? "Login..." : "Login"}
            </button>

            <hr />

            <Link to="/users/register">Click Here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
