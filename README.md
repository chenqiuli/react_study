## 一、React 介绍

### 1. React 起源与发展

### 2013 年 5 月起源于 Facebook 的内部项目

### 2. React 的特性

![](./images/2.png)

### 3. 虚拟 DOM

![](./images/3.png)

## 二、create-react-app

### 1.方式一：需全局安装 create-react-app

```bash
npm i -g create-react-app
create-react-app myapp
```

### 2.方式二：临时安装

```bash
npx create-react-app myapp
```

## 三、react 基础

### 1. React.createElement

### React 的原始写法，使用 通过 babel 把 jsx 转为 js 对象的形式

```js
ReactDOM.render(
  <div id="aaa" style={{ color: 'red' }}>
    <p id="bbb">111</p>
    <p id="ccc">222</p>
  </div>,
  document.getElementById('root')
);
```

```js
ReactDOM.render(
  React.createElement(
    'div',
    {
      id: 'aaa',
      style: {
        color: 'red',
      },
    },
    [
      React.createElement('p', { id: 'bbb' }, 111),
      React.createElement('p', { id: 'ccc' }, 222),
    ]
  ),
  document.getElementById('root')
);
```

### 2. class 组件

```js
import React from 'react';
class MyApp extends React.Component {
  render() {
    return <div>111</div>;
  }
}
export default MyApp;
```

### 3. 函数组件

### 在 16.8 之前是无状态组件，在 16.8 之后有了 react hooks，也可以使函数组件变成有状态组件

```js
function MyApp() {
  return <div>11---1</div>;
}

const MyApp2 = () => <div>MyApp</div>;

export default MyApp2;
```

### 4. 组件样式

### JSX 内使用一个{ }表示变量或表达式的执行

```js
import React, { Component } from 'react';
import './css/01-index.css';

class MyApp extends Component {
  render() {
    const style = {
      background: 'red',
      width: 200,
      textAlign: 'center',
      color: '#fff',
    };

    return (
      <div>
        <p
          style={{
            background: 'green',
            width: 200,
            textAlign: 'center',
            color: 'white',
          }}
        >
          第一种展示样式方法
        </p>
        <p style={style}>第二种展示样式方法</p>
        <p className="highlight">
          第三种展示样式方法，通过引入外部样式，webpack把样式当做head标签内的内部样式执行了
        </p>
      </div>
    );
  }
}

export default MyApp;
```

![](./images/1.PNG)

### 5. ref

### ref 可以获取 dom 节点或者组件实例

```js
import React, { Component } from 'react';

class MyApp extends Component {
  myref = React.createRef();

  handleClick = () => {
    console.log(this.refs.myref.value);
  };

  render() {
    return (
      <div>
        {/* deprecated */}
        <input ref="myref" id="input1" />
        <button onClick={this.handleClick}>点击</button>
        <br />
        {/* new */}
        <input ref={this.myref} id="input2" />
        <button
          onClick={() => {
            console.log(this.myref.current.value);
          }}
        >
          点击
        </button>
      </div>
    );
  }
}

export default MyApp;
```

#### 旧写法：给标签设置 ref="myinput",通过这个获取 this.refs.myinput 获取 dom 节点

```js
<input ref="myinput" />;
访问this.refs.myinput;
```

### 新写法：

```js
myref = React.createRef();
<input ref={this.myref} />;
访问this.myref.current;
```

### 6. 事件绑定

## 面试题

<font color="red" size="4">\* 1、react 的绑定事件机制跟普通事件是一样的吗？</font>

### 不一样，普通事件是直接绑定在当前元素身上，react 的事件是全部绑定在根节点身上，采取事件代理的方式冒泡到当前元素。但是 react 的事件跟普通事件一样都有 event 对象，用法一致。
