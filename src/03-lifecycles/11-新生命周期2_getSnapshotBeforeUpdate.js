import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    myname: "qiu"
  };

  componentDidUpdate (prevProps, prevState, value) {
    console.log("componentDidUpdate", value);
  }

  // 在更新之前记录下快照，返回一个值，
  // render -> getSnapshotBeforeUpdate -> componentDidUpdate 
  getSnapshotBeforeUpdate () {
    console.log("getSnapshotBeforeUpdate");
    return {
      num: 100
    };
  }

  render () {
    console.log("render");
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: "QIU"
          });
        }}>click</button>
        MyApp-{this.state.myname}
      </div>
    );
  }
}

export default MyApp;