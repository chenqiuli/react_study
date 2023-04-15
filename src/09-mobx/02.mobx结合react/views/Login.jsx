import React from 'react';
import LoginPng from '../assets/login.png';
import { Button, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  const onFinish = (values) => {
    console.log('Success:', values);
    localStorage.setItem('token', values.phone + values.code);
    history.push('/mine');
  };

  return (
    <div className="login">
      <div>
        <img src={LoginPng} alt="login" />
      </div>
      <Form name="basic" size="small" onFinish={onFinish}>
        <Form.Item label="手机号" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="验证码" name="code">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
