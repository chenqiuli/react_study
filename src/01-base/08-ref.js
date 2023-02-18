import React, { Component } from 'react';

class App extends Component {
  myref = React.createRef();

  render () {
    return (
      <div>
        <input ref={this.myref} />
        <button onClick={() => this.handleClick()}>add</button>
      </div>
    );
  }

  handleClick () {
    console.log('add', this.myref.current);
  }
}

export default App;