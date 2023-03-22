import React, { Component } from 'react';
import PropTypes from "prop-types";

class Navbar extends Component {
  a = 1; // 对象属性，需要实例化对象，访问的时候需要new一个对象

  // 把类属性挪到里面，要加static表示它是类属性，不需要实例化，访问的时候Navbar.propTypes
  static propTypes = {
    title: PropTypes.string,
    leftBtn: PropTypes.bool,
    rightBtn: PropTypes.bool
  };

  static defaultProps = {
    leftBtn: true,
    rightBtn: true
  };

  render () {
    const { title, leftBtn, rightBtn, } = this.props;
    return (
      <div>
        {leftBtn && <button>返回</button>}
        <span>{title}</span>
        {rightBtn && <button>搜索</button>}
      </div>
    );
  }
}

export default Navbar;

// 类属性，Navbar是个类
// Navbar.propTypes = {
//   title: PropTypes.string,
//   leftBtn: PropTypes.bool,
//   rightBtn: PropTypes.bool
// };
// 默认属性
// Navbar.defaultProps = {
//   leftBtn: true,
//   rightBtn: true
// };

class Test {
  static a = "a";
  a = 1;
}
const obj = new Test();
console.log(obj.a); // 对象属性
console.log(Test.a); // 类属性