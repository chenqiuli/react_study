import React, { Component } from 'react';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      arr: [{
        id: 1,
        text: '学习科目一',
        checked: false
      }, {
        id: 2,
        text: '学习科目二',
        checked: false
      }, {
        id: 3,
        text: '学习科目三',
        checked: true
      }],
      mytext: ""
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
    const { arr, mytext } = this.state;
    const isExist = arr.map(item => item.text).includes(mytext);
    if (!isExist) {
      this.setState({
        arr: [...arr, { id: arr.length + 1, text: mytext }]
      });
    }
    this.setState({
      mytext: ""
    });
  };

  handleCheck (idx) {
    const newArr = [...this.state.arr].filter((item, index) => {
      if (index === idx) {
        item.checked = !item.checked;
      }
      return item;
    });
    this.setState({
      arr: newArr
    });
  }


  render () {
    const { arr, mytext } = this.state;
    return (
      <div>
        <input type="text" value={mytext} onChange={(evt) => {
          this.setState({
            mytext: evt.target.value
          });
        }} />
        <button style={{ marginLeft: 10 }} onClick={this.handleOk}>确定</button>
        {arr.length ? (
          <ul>
            {arr.map((item, index) => {
              return (
                <li key={item.id} style={{ marginBottom: 10 }}>
                  <input type="checkbox" checked={item.checked} onChange={() => this.handleCheck(index)} />
                  <span dangerouslySetInnerHTML={{
                    __html: item.text
                  }} style={{ textDecoration: item.checked ? 'line-through' : '' }}></span>
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
