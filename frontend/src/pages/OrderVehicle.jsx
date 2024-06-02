/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, Form, Input } from "antd";
import { message } from "antd";
import DefaultLayoutUser from "../components/DefaultLayoutUser";

const Order = () => {
  function onFinish(values) {
    console.log(values);

    message.success("Your order is placed!");
  }

  return (
    <DefaultLayoutUser>
      <div className="order">
        <Row gutter={16} className="d-flex align-items-center">
          <button
            className="custom-button btn1 my-2"
            onClick={() => {
              window.history.back();
            }}
          >
            Go Back
          </button>
          

          <Col lg={16} style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="Order Vehicle"
              style={{ maxWidth: "100%" }}
            />
            <h2 className="login-logo ">Order Vehicle</h2>
            <hr />
            <hr />
          </Col>

          <Col lg={8} className="text-left p-5">
            <Form
              layout="vertical"
              className="order-form p-5"
              onFinish={onFinish}
            >
              <h2>Order</h2>
              <hr />

              <Form.Item
                name="name"
                label="Name :"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="vehicletype"
                label="Vehicle Type :"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="itemno"
                label="Item No : :"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="color"
                label="Color :"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-Mail :"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="contactno"
                label="Contact No:"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="advance"
                label="Advance(LKR:) :"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <button className="btn2 mt-2 mb-3">Submit</button>
            </Form>
          </Col>
        </Row>
      </div>
    </DefaultLayoutUser>
  );
};

export default Order;
