import React from 'react';
import PropTypes from "prop-types";

export default function SiderBar (props) {
  const { background, position } = props;
  const obj = {
    background,
    width: 200,
    height: 200,
    position: 'fixed',
    top: 30
  };
  const obj1 = { left: 0, };
  const obj2 = { right: 0 };
  const styleObj = position === "left" ? { ...obj, ...obj1 } : { ...obj, ...obj2 };
  return (
    <div>
      <ul style={styleObj}>
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
        <li>666</li>
      </ul>
    </div>
  );
}

// 函数组件只能通过类属性来定义类型
SiderBar.propTypes = {
  background: PropTypes.string,
  position: PropTypes.string,
};

SiderBar.defaultProps = {
  background: "",
  position: ""
};