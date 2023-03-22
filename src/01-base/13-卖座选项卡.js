import React, { Component } from 'react';
import "./css/02-卖座.css";
import Film from "./components/Film/Film";
import Cinema from './components/Cinema/Cinema';
import Mine from "./components/Mine/Mine";

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      list: [{
        id: 1,
        text: "电影"
      }, {
        id: 2,
        text: "影院"
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
      <div>
        {idx === 0 && <Film />}
        {idx === 1 && <Cinema />}
        {idx === 2 && <Mine />}
        <ul className='tabbar'>
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
      </div>
    );
  }
}

export default MyApp;