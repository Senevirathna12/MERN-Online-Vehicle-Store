/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    const data = {
      username,
      password,
    };

    setLoading(true);

    axios
      .post("http://localhost:5555/admins/adminregister", data)
      .then((response) => {
        setLoading(false);

        if (response.status === 201) {
          console.log("Admin registered successfully");
          message.success("Registration successful");
          navigate("/admins/adminlogin");
        } else {
          console.error("Registration failed with status:", response.status);
          message.error("Registration failed");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during registration:", error);
        message.error("Error during registration");
      });
  };

  return (
    <div className="login bgc">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            style={{ width: "100%", height: "100%" }}
            alt="VehicleStore"
          />
          <h2 className="login-logo">VehicleStore</h2>
        </Col>

        <Col lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5">
            <h2>Admin Register</h2>
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

            <Form.Item
              name="cpassword"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <button className="btn1 mt-2 mb-3" onClick={handleRegister}>
              {loading ? "Registering..." : "Register"}
            </button>
            <br />

            <Link to="/admins/adminlogin">Click Here to AdminLogin</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
