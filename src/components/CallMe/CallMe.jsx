import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { useState } from "react";

const CallMe = () => {
  const [form] = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlerSubmit = (values) => {
    console.log(values);
    form.resetFields();
    handleCancel();
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handlerSubmit} form={form}>
          <Form.Item
            name="name"
            label="Your Name"
            rules={[
              {
                required: true,
                message: "Name is required",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="phone">
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default CallMe;
