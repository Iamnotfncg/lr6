import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const AuthModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  
  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title="Авторизація"
      visible={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Логін" name="username" rules={[{ required: true, message: 'Введіть логін' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Пароль" name="password" rules={[{ required: true, message: 'Введіть пароль' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleOk}>
            Увійти
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AuthModal;
