import React from 'react';
import styled from 'styled-components';

const ButtonStyled1 = styled.button({
  width: '100px',
  height: '100px',
  background: 'red'
});

const ButtonStyled2 = styled(ButtonStyled1)({
  background: 'yellow'
});

const ButtonStyled3 = styled(ButtonStyled1)({
  background: 'blue'
});

export default function App () {
  return (
    <div>
      App
      {/* 所有按钮的宽高一样，颜色不同。可以复用第一个的样式 */}
      <ButtonStyled1>click1</ButtonStyled1>
      <ButtonStyled2>click2</ButtonStyled2>
      <ButtonStyled3>click3</ButtonStyled3>
    </div>
  );
}
