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

### ref 可以获取 dom 节点或者整个组件的实例

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

### react 的绑定事件机制跟普通事件是一样的吗？

### 不一样，普通事件是直接绑定在当前元素身上，react 的事件是全部绑定在根节点身上，采取事件代理的方式冒泡到当前元素。但是 react 的事件跟普通事件一样都有 event 对象，用法一致。

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

### 7. state 状态

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

### 10. setState 同步异步

### <1> 每次调用 setState 都会引发虚拟 dom 的对比，每次 setState 都会引起 render 重新渲染

### <2> setState 处在同步的逻辑中，是异步更新状态，异步更新真实 dom

#### setState 会合并更新[batch update]状态，把几次的 setState 合并成一次以最后一次为主，访问到的状态是老状态

#### setState 接受第二个参数，第二个参数是回调函数，状态和 dom 更新完后就会被触发

#### 等同步的执行完，再执行异步的

### <3> setState 处在异步的逻辑中，是同步更新状态，同步更新真实 dom，访问到的状态是更新后的状态

```js
import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    count: 0,
  };

  handleClick1 = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count, '1()'); // 4
      }
    );
    console.log(this.state.count, '1'); // 1-先执行，后面的按序号

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count, '2()'); // 5
      }
    );
    console.log(this.state.count, '2'); // 2

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count, '3()'); // 6
      }
    );
    console.log(this.state.count, '3'); // 3
  };

  handleClick2 = () => {
    // setTimeout是异步的
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count, '1'); // 1-先执行，后面的按序号

      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count, '2'); // 2

      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count, '3'); // 3
    }, 0);
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick1}>点击1</button>
        <button onClick={this.handleClick2}>点击2</button>
      </div>
    );
  }
}

export default MyApp;
```

### 11. props 属性

### <1> 在引用组件上使用 key="value"的形式传递 props，在类组件内部通过 this.props 访问 props 属性，在函数组件通过 props 形参访问

### <2> 属性的验证：通过 prop-types，类组件写成对象属性的形式，函数组件写成类属性的形式

### <3> 属性的默认值：defaultProps，传进来的参数会覆盖默认值

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  a = 1; // 对象属性，需要实例化对象，访问的时候需要new一个对象 let obj = new Navbar(); obj.a

  // 把类属性挪到里面，要加static表示它是类属性，不需要实例化，访问的时候Navbar.propTypes
  static propTypes = {
    title: PropTypes.string,
    leftBtn: PropTypes.bool,
    rightBtn: PropTypes.bool,
  };

  static defaultProps = {
    leftBtn: true,
    rightBtn: true,
  };

  render() {
    const { title, leftBtn, rightBtn } = this.props;
    return (
      <div>
        {leftBtn && <button>返回</button>}
        <span>{title}</span>
        {rightBtn && <button>搜索</button>}
      </div>
    );
  }
}

export default Navbar;

// 类属性
// Navbar.propTypes = {
//   title: PropTypes.string,
//   leftBtn: PropTypes.bool,
//   rightBtn: PropTypes.bool
// };
// 默认属性
// Navbar.defaultProps = {
//   leftBtn: true,
//   rightBtn: true
// };
```

```js
import React from 'react';
import PropTypes from 'prop-types';

export default function SiderBar(props) {
  const { background, position } = props;
  const obj = {
    background,
    width: 200,
    height: 200,
    position: 'fixed',
    top: 30,
  };
  const obj1 = { left: 0 };
  const obj2 = { right: 0 };
  const styleObj =
    position === 'left' ? { ...obj, ...obj1 } : { ...obj, ...obj2 };
  return (
    <div>
      <ul style={styleObj}>
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
        <li>666</li>
      </ul>
    </div>
  );
}

// 函数组件只能通过类属性来定义类型
SiderBar.propTypes = {
  background: PropTypes.string,
  position: PropTypes.string,
};

SiderBar.defaultProps = {
  background: '',
  position: '',
};
```

### 12. 受控与非受控

### <1> 表单的受控：1.靠修改 state 的值引起 render 重新渲染实现。通过表单组件的 value 属性以及 onChange 事件，value 的值由 state 控制，调用 onChange 去修改 state 的值，setState 每次改变都会触发 render 重新渲染，所以表单组件的 value 值能确保是最新的。2.也可以靠 ref 获取子组件的实例，获取子组件 state 的值以及修改值

### 原生的 input 标签跟 React 中的 input 标签有什么区别？1.原生 input 标签上的监听输入框实时改变的事件是 oninput，React 中监听输入框实时改变的事件是 onChange

### <2> 表单的非受控：是用 ref 取原生 dom 节点的方式，设置默认值用 defaultValue，但是无法实现与其他组件通信。

### <3> 组件的受控：组件的数据渲染应该由被调用者传递的 props 完全控制，控制则为受控组件，否则是非受控组件。多写无状态组件，少写有状态组件。组件尽量不要有自己的状态，状态应该由传过来的 props 完全控制。

```js
import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    username: 'xiaoming',
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <input
          value={username}
          type="text"
          onChange={(evt) => {
            this.setState({
              username: evt.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            console.log(username);
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.setState({
              username: '',
            });
          }}
        >
          重置
        </button>
      </div>
    );
  }
}

export default MyApp;
```

### 13. 组件通信

### <1> 父传子：在组件上通过 key="value"的形式传参给组件内部

### <2> 子传父：在父组件上定义一个回调函数，子组件调用回调函数。父组件引用 ref 获取子组件的实例

```js
import React, { Component } from 'react';

// 点击按钮让SiderBar显示隐藏
class NavBar extends Component {
  render() {
    const { event } = this.props;
    return (
      <div style={{ background: 'green' }}>
        <button
          onClick={() => {
            event();
          }}
        >
          按钮
        </button>
        <span>NavBar</span>
      </div>
    );
  }
}

class SiderBar extends Component {
  render() {
    return (
      <ul style={{ background: 'yellow', width: 200 }}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    );
  }
}

class MyApp extends Component {
  state = {
    isShow: true,
  };

  handleEvent = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <NavBar event={this.handleEvent} />
        {isShow && <SiderBar />}
      </div>
    );
  }
}

export default MyApp;
```

### <3> 兄弟组件：通过父组件中间人模式通信，一组件回调给父组件，父组件存到 state，再传递给另一个组件，由此实现兄弟组件通信

```js
import React, { Component } from 'react';
import axios from 'axios';
import './css/兄弟组件通信.css';

// FilmItem 与 FilmDetail通信
class MyApp extends Component {
  state = {
    filmList: [],
    info: '',
  };

  componentDidMount() {
    axios({
      method: 'get',
      url:
        'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=764626',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then((res) => {
      this.setState({
        filmList: res.data.data.films,
      });
    });
  }

  render() {
    return (
      <div className="app">
        <div>
          {this.state.filmList.map((item) => (
            <FilmItem
              key={item.filmId}
              {...item}
              onEventChange={(value) => {
                this.setState({
                  info: value,
                });
              }}
            />
          ))}
        </div>

        <FilmDetail info={this.state.info} />
      </div>
    );
  }
}

export default MyApp;

const FilmItem = (props) => {
  const { name, poster, actors, synopsis, onEventChange = () => {} } = props;
  return (
    <div
      className="filmItem"
      onClick={() => {
        onEventChange(synopsis);
      }}
    >
      <img src={poster} />
      <div>
        <p>{name}</p>
        <p>主演：{actors.map((item) => item.name).join(' ')}</p>
      </div>
    </div>
  );
};

function FilmDetail(props) {
  return <div className="filmDetail">{props.info || '--'}</div>;
}
```
