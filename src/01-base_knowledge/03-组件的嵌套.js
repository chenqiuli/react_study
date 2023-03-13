import React, { Component } from 'react';

function Navchild () {
  return <div>Navchild</div>;
}

class Navbar extends Component {
  render () {
    return (
      <div>
        Navbar
        <Navchild></Navchild>
      </div>
    );
  }
}

function Swiper () {
  return (
    <div>Swiper</div>
  );
}

const Tabbar = () => {
  return (
    <div>Tabbar</div>
  );
};

class App extends Component {
  render () {
    return (
      <div>
        <Navbar>
        </Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    );
  }
}

export default App;