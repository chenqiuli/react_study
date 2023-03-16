import React, { Component } from 'react';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      myHtml: `<b style="color: red;">111</b>`,
      inputHtml: "",
    };
  }

  myRef = React.createRef();

  handleOk = () => {
    const inputValue = this.myRef.current.value;
    this.setState({
      inputHtml: inputValue
    });
  };

  render () {
    const { myHtml, inputHtml } = this.state;
    return (
      <div>
        <div dangerouslySetInnerHTML={{
          __html: myHtml
        }}></div>

        <div>
          <input ref={this.myRef} />
          <button onClick={this.handleOk}>确定</button>
        </div>

        <div dangerouslySetInnerHTML={{
          __html: inputHtml
        }}></div>

      </div>
    );
  }
}

export default MyApp;