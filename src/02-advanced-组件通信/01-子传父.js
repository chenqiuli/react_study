import React, { Component } from 'react';

// 点击按钮让SiderBar显示隐藏
class NavBar extends Component {
  render () {
    const { event } = this.props;
    return (
      <div style={{ background: 'green' }}>
        <button onClick={() => {
          event();
        }}>按钮</button>
        <span>NavBar</span>
      </div>
    );
  }
}

class SiderBar extends Component {
  render () {
    return (
      <ul style={{ background: 'yellow', width: 200 }}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    );
  }
}

class MyApp extends Component {
  state = {
    isShow: true
  };

  handleEvent = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

  render () {
    const { isShow } = this.state;
    return (
      <div>
        <NavBar event={this.handleEvent} />
        {isShow && <SiderBar />}
      </div>
    );
  }
}

export default MyApp;