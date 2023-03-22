import React, { Component } from 'react';
import BetterScroll from "better-scroll";

class MyApp extends Component {
  state = {
    list: [111, 222, 333, 444, 555, 666, 777, 888, 999, 123, 124, 121, 125, 126, 127, 128, 129, 131, 132, 133, 134, 135, 136, 137, 138]
  };

  componWillMount () {
    // new BetterScroll("#wrapper");
  }

  componentDidMount () {
    new BetterScroll("#wrapper");
  }

  render () {
    return (
      <div>
        <div id="wrapper" style={{
          height: 200,
          background: 'yellow',
          overflow: 'hidden',
          cursor: 'pointer',
          userSelect: 'none'
        }}>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item}>{item}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyApp;