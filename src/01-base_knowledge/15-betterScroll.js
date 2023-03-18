import React, { Component } from 'react';
import BetterScroll from "better-scroll";

class MyApp extends Component {
  state = {
    list: []
  };

  getData = () => {
    this.setState({
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    }, () => {
      // 同步里，setState异步执行，在第二个参数才能取得改变后的数据
      new BetterScroll(".wrapper");
    });
  };

  render () {
    return (
      <>
        <button onClick={this.getData}>确定</button>
        <div className='wrapper' style={{ height: 100, background: 'yellow', overflow: 'hidden' }}>
          <ul className='content'>
            {this.state.list.map(item => {
              return (
                <li key={item}>{item}</li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default MyApp;