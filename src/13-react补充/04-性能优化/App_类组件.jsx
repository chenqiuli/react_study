import React, { Component, useState, PureComponent } from 'react';

export default function App() {
  const [name, setname] = useState('xiaoming');
  const [age] = useState(19);
  const [obj, setobj] = useState({
    name: 'xiaolan',
    age: 18,
  });

  return (
    <div>
      {name}
      <button
        onClick={() => {
          setname(Math.random(1));
        }}
      >
        改变name
      </button>
      {/* 只有把name属性传给Child组件，name变了，Child才会更新；如果name没变，Child组件直接复用上次的 */}
      <Child1 name={name} age={age} />
      <button
        onClick={() => {
          setobj({
            name: 'yellow',
            age: 20,
          });
        }}
      >
        改变obj
      </button>
      <Child2 obj={obj} />
    </div>
  );
}

// 类组件：PureComponent浅比较（this.props是基本类型的）
class Child1 extends PureComponent {
  componentDidUpdate(prevProps, prevState) {
    console.log('Child1', 111);
  }
  render() {
    return <div>Child2</div>;
  }
}

// 类组件：深比较（this.props是引用类型的）
class Child2 extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    // console.log(this.props, nextProps);//this.props上一次的props；nextProps下一次的props
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('update');
  }

  render() {
    return <div>Child2</div>;
  }
}
