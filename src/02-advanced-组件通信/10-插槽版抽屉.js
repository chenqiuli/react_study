import React, { Component } from 'react';

// 点击展开收起让SiderBar显示隐藏，把button当成插槽放到父组件中去

class Navbar extends Component {
  render () {
    return (
      <div style={{ background: 'yellow' }}>
        {this.props.children}
        Navbar
      </div>
    );
  }
}

class SiderBar extends Component {
  render () {
    return (
      <div style={{
        background: '#fcc',
        width: 300,
        height: 300,
        display: this.props.isShow ? 'block' : 'none'
      }}>
        SiderBar
      </div>
    );
  }
}

class MyApp extends Component {
  state = {
    isShow: false
  };

  toggleShow = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

  render () {
    const { isShow } = this.state;
    return (
      <div>
        <Navbar >
          <button onClick={() => {
            this.toggleShow();
          }}>
            展开收起
          </button>
        </Navbar>
        <SiderBar isShow={isShow} />
      </div>
    );
  }
}

export default MyApp;