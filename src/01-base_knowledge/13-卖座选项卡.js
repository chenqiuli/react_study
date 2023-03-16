import React, { Component } from 'react';
import "./css/02-卖座.css";

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      list: [{
        id: 1,
        text: "电影/影院"
      }, {
        id: 2,
        text: "演出"
      }, {
        id: 3,
        text: "我的"
      }],
      idx: 0,
    };
  }

  handleClick = (idx) => {
    this.setState({
      idx
    });
  };

  render () {
    const { list, idx } = this.state;
    return (
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={item.id}
              className={idx === index ? 'active' : ''}
              onClick={() => this.handleClick(index)}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MyApp;