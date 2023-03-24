import React, { Component } from 'react';

class Navbar extends Component {

  render () {
    const { eventMine } = this.props;
    return (
      <div {...this.props}>
        <button>返回</button>
        <span>导航栏</span>
        <button onClick={() => {
          eventMine();
        }}>我的</button>
      </div>
    );
  }
}

export default Navbar;