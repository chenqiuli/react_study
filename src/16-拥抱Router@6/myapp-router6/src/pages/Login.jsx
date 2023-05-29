import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const username = React.createRef();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        用户名：
        <input type="text" ref={username} />
      </div>
      <div>
        <button
          onClick={() => {
            localStorage.setItem('token', username.current.value);
            navigate('/mine');
          }}
        >
          登录
        </button>
      </div>
    </div>
  );
}
