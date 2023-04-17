import React from 'react';
import styled from "styled-components";

// styled是个高阶组件，接收一个低级组件，返回一个带有定制化样式的高级组件  
// 第一种写法
// const ChildStyled = styled(Child)({
//   width: '100px',
//   height: '100px',
//   background: 'yellow',
//   textAlign: 'center',
//   lineHeight: '100px',
// });

// 第二种写法
const ChildStyled = styled(Child)`
    width: 100px;
    height: 100px;
    background: yellow;
    text-align: center;
    line-height: 100px;
  `;

export default function App () {
  return (
    <div>
      App
      <ChildStyled />
    </div>
  );
}

// 子组件记得要设置className接收
function Child (props) {
  return (
    <div className={props.className}>
      Child
    </div>
  );
}

