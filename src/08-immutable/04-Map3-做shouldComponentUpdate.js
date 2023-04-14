import React, { Component } from 'react';
import { Map } from "immutable";


class App extends Component {
  state = {
    info: Map({
      name: "aaa",
      score: 19,
      arr: [1, 2, 3],
      obj: Map({
        age: 18,
        nation: "China",
        school: "广工"
      })
    })
  };

  render () {
    const newInfo = this.state.info.toJS();
    console.log(newInfo, 'newInfo');

    return (
      <div>
        {newInfo.name}-{newInfo.score}
        <ul>
          {newInfo.arr.map(item => <li key={item}>{item}</li>)}
        </ul>
        {newInfo.obj.school}-
        {this.state.info.get("obj").get("nation")}
        <br />
        {/* 没有修改obj对象，CHild组件不会重新渲染 */}
        <button onClick={() => {

          this.setState({
            info: this.state.info.set("name", "bbb")
          });

        }}>click1-没有修改obj</button>
        <br />
        {/* 只有修改了obj对象，CHild组件才会重新渲染 */}
        <button onClick={() => {
          this.setState({
            info: this.state.info.set("obj", Map({
              ...newInfo.obj,
              nation: "美国"
            }))
          });

        }}>click2-修改了obj</button>
        {/* 传递一个immutable对象，在子组件可以直接对比  */}
        <Child data={this.state.info.get("obj")} />
      </div>
    );
  }
}

export default App;



class Child extends Component {
  componentDidUpdate () {
    console.log("componentDidUpdate");
  }


  shouldComponentUpdate = (nextProps, nextState) => {
    // this.props 上一次的props
    // nextProps 下一次的props
    // console.log(this.props.data, nextProps.data);
    if (this.props.data === nextProps.data) {
      return false;
    }

    return true;
  };


  render () {
    return (
      <div>
        Child
      </div>
    );
  }
}
