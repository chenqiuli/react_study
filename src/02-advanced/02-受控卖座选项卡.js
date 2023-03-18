import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import Film from './components/Content/Film';
import Cinema from './components/Content/Cinema';
import Mine from './components/Content/Mine';
import "./css/卖座.css";


class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      list: [{
        text: '电影',
        id: 0
      }, {
        text: '影院',
        id: 1
      }, {
        text: '我的',
        id: 2
      }],
      activeIndex: 0,
    };
  }

  handleActive = (index) => {
    this.setState({
      activeIndex: index
    });
  };


  handleMine = () => {
    this.setState({
      activeIndex: 2
    });
  };

  render () {
    const { list, activeIndex } = this.state;
    return (
      <div className='root'>
        <Navbar className="navbar" eventMine={this.handleMine} />
        <div className='content'>
          {activeIndex === 0 && <Film />}
          {activeIndex === 1 && <Cinema />}
          {activeIndex === 2 && <Mine />}
        </div>
        <Tabbar
          list={list}
          className="tabbar"
          activeIndex={activeIndex}
          eventActive={this.handleActive}
        />
      </div>
    );
  }
}

export default MyApp;