import React from 'react';
import styled from "styled-components";

const InputStyled = styled.input({
  outline: 'none',
  borderBottom: '1px solid red'
});

const DivStyled = styled.div`
  width:50px;
  height:50px;
  background:${props => props.bg ?? 'yellow'};
`;

export default function App () {
  return (
    <div>
      App
      {/* 原生标签属性自动透传 */}
      <InputStyled type="password" placeholder='请输入密码' />
      {/* 自定义组件透传属性，通过props回调接收 */}
      <DivStyled bg="blue"></DivStyled>
      <DivStyled></DivStyled>
    </div>
  );
}
