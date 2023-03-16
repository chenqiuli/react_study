import React, { Component } from 'react';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      arr: [{
        id: 1,
        text: '学习科目一'
      }, {
        id: 2,
        text: '学习科目二'
      }, {
        id: 3,
        text: '学习科目三'
      }]
    };
  }

  handleDel (id) {
    const { arr } = this.state;
    const newArr = arr.filter(item => item.id !== id);
    this.setState({
      arr: newArr
    });
  }

  handleOk = () => {
    const inputValue = this.myref.current.value;
    const { arr } = this.state;
    const isExist = arr.map(item => item.text).includes(inputValue);
    if (!isExist) {
      this.setState({
        arr: [...arr, { id: arr.length + 1, text: inputValue }]
      });
    }
    this.myref.current.value = "";
  };

  myref = React.createRef();

  render () {
    const { arr } = this.state;
    return (
      <div>
        <input ref={this.myref} />
        <button style={{ marginLeft: 10 }} onClick={this.handleOk}>确定</button>
        {arr.length ? (
          <ul>
            {arr.map((item) => {
              return (
                <li key={item.id} style={{ marginBottom: 10 }}>
                  {item.text}
                  <button style={{ marginLeft: 10 }} onClick={() => this.handleDel(item.id)}>删除</button>
                </li>
              );
            })}
          </ul>
        ) : <div>暂无待办列表</div>}
      </div>
    );
  }
}

export default MyApp;