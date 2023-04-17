import React, { useState } from 'react';
import styled from "styled-components";

// 第一种写法
const ULStyled = styled.ul({
  li: {
    flex: 1,
    // 不支持hover
  },
  display: 'flex',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  listStyle: 'none'
});
// 第二种写法
// const ULStyled = styled.ul`
//   display: flex;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 50px;
//   line-height: 50px;
//   text-align: center;
//   list-style: none;
//   li {
//     flex: 1;
//     &:hover {
//       background: red;
//     }
//   };
// `;

export default function App () {
  const [tabs] = useState([
    "影院", "电影", "咨询", "我的"
  ]);



  return (
    <div>
      App
      <ULStyled>
        {tabs.map(item => <li key={item}>{item}</li>)}
      </ULStyled>
    </div>
  );
}
