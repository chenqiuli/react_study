import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SiderBar from './components/SiderBar';

class MyApp extends Component {
  render () {
    return (
      <div>
        <Navbar title="导航" />
        <SiderBar background="yellow" position="right" />
      </div>
    );
  }
}

export default MyApp;