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

### 6. 事件绑定

```js
import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    text: '文本',
  };

  handleClick1 = () => {
    console.log(this.state.text + '1');
  };

  handleClick3() {
    console.log(this.state.text + '3');
  }

  handleClick4() {
    console.log(this.state.text + '4');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>点击1</button>
        <button
          onClick={() => {
            console.log(this.state.text + '2');
          }}
        >
          点击2
        </button>
        <button onClick={this.handleClick3.bind(this)}>点击3</button>
        <button onClick={() => this.handleClick4()}>点击4</button>
      </div>
    );
  }
}

export default MyApp;
```

### 7. state

```js
import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    isShow: true,
  };

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <h1>欢迎来到react的世界</h1>
        <button
          onClick={() => {
            this.setState({
              isShow: !isShow,
            });
          }}
        >
          {isShow ? '收藏' : '取消收藏'}
        </button>
      </div>
    );
  }
}

export default MyApp;
```

### 8. 列表渲染

### 为了列表的复用和重排，设置 key 值，提高性能；理想的 key 是 item.id，如果不涉及列表的增加删除重排，可以设置成索引

```js
import React, { Component } from 'react';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      arr: [
        {
          id: 1,
          text: '111',
        },
        {
          id: 2,
          text: '222',
        },
        {
          id: 3,
          text: '333',
        },
      ],
    };
  }

  render() {
    const { arr } = this.state;
    return (
      <div>
        <ul>
          {arr.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MyApp;
```

### 9. dangerouslySetInnerHTML

### dangerouslySetInnerHTML 可以把一段代码片段变成 html，然后插入到某个地方，可能会造成 xss 攻击

```js
import React, { Component } from 'react';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      myHtml: `<b style="color: red;">111</b>`,
      inputHtml: '',
    };
  }

  myRef = React.createRef();

  handleOk = () => {
    const inputValue = this.myRef.current.value;
    this.setState({
      inputHtml: inputValue,
    });
  };

  render() {
    const { myHtml, inputHtml } = this.state;
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: myHtml,
          }}
        ></div>

        <div>
          <input ref={this.myRef} />
          <button onClick={this.handleOk}>确定</button>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: inputHtml,
          }}
        ></div>
      </div>
    );
  }
}

export default MyApp;
```

![](./images/4.gif)

## 面试题

<font color="red" size="4">\* 1、react 的绑定事件机制跟普通事件是一样的吗？</font>

### 不一样，普通事件是直接绑定在当前元素身上，react 的事件是全部绑定在根节点身上，采取事件代理的方式冒泡到当前元素。但是 react 的事件跟普通事件一样都有 event 对象，用法一致。
