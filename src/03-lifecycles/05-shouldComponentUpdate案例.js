import React, { Component } from 'react';


class Box extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    // 老的current === 老的index || 新的current === 新的index
    if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
      return true;
    }
    return false;
  }
  render () {
    // 每次一改变，有几次box就会渲染几次，其实只要上一个红色的以及下一次即将变成红色的render就行了
    console.log("render");
    return (
      <div style={{
        width: 100,
        height: 100,
        border: this.props.current === this.props.index ? '1px solid red' : '1px solid gray',
        float: 'left',
        margin: '10px',
        lineHeight: '100px',
        textAlign: 'center'
      }}>{this.props.text}</div>
    );
  }
}

class MyApp extends Component {
  state = {
    list: ["000", "111", "222", "333", "444", "555", "666", "777", "888", "999"],
    current: 0,
  };

  render () {

    return (
      <div>
        <input type="number" value={this.state.current} onChange={(evt) => {
          this.setState({
            current: Number(evt.target.value)
          });
        }} />
        <div style={{ overflow: 'hidden' }}>
          {this.state.list.map((item, index) => {
            return (
              <Box key={index} text={item} current={this.state.current} index={index}></Box>
            );
          })}
        </div>

      </div>
    );
  }
}

export default MyApp;