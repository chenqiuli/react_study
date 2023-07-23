import React, { Component } from 'react';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      arr: [{
        id: 1,
        text: "111"
      }, {
        id: 2,
        text: "222"
      }, {
        id: 3,
        text: "333"
      }]
    };
  }

  render () {
    const { arr } = this.state;
    return (
      <div>
        <ul>
          {arr.map(item => {
            return (
              <li key={item.id}>{item.text}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MyApp;