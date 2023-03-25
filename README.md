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

### 2. class 组件 rcc

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
myref = React.createRef();
<input ref={this.myref} id="input2" />;
// 访问 this.myref.current.value
console.log(this.myref.current.value);
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

### <4> 特殊属性：children-插槽，在父组件文件中引入子组件标签的内部再插入 jsx，此时需要在子组件预留一个位置显示 children，children 是个数组。插槽一是为了复用，二是一定程度的减少父子通信

```js
import React, { Component } from 'react';

// 点击展开收起让SiderBar显示隐藏，把button当成插槽放到父组件中去

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: 'yellow' }}>
        {this.props.children}
        Navbar
      </div>
    );
  }
}

class SiderBar extends Component {
  render() {
    return (
      <div
        style={{
          background: '#fcc',
          width: 300,
          height: 300,
          display: this.props.isShow ? 'block' : 'none',
        }}
      >
        SiderBar
      </div>
    );
  }
}

class MyApp extends Component {
  state = {
    isShow: false,
  };

  toggleShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <Navbar>
          <button
            onClick={() => {
              this.toggleShow();
            }}
          >
            展开收起
          </button>
        </Navbar>
        <SiderBar isShow={isShow} />
      </div>
    );
  }
}

export default MyApp;
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

### <1> 父子通信

### 在父组件上通过 key="value" 的形式传参给子组件；在父组件上定义一个回调函数，子组件调用回调函数与父组件通信。父组件引用 ref 获取子组件的实例，获得子组件上所有的属性。

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

### <2> 兄弟组件通信：

### 通过父组件中间人模式通信，兄弟 A 组件回调给父组件，父组件存到 state，再传递给兄弟 B 组件，由此实现兄弟组件通信。兄弟组件通信不适用于叔侄通信，会显得代码很累赘。

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

### <3> 跨组件通信

### 通过发布订阅模式，定义一个共用的调度中心，内有发布订阅的方法，B 组件初始化就要订阅，在 A 组件一发布的时候就可以立马收到信息。

```js
import React, { Component } from 'react';
import axios from 'axios';
import './css/兄弟组件通信.css';

const bus = {
  list: [],

  // 订阅
  subscribe(callback) {
    // console.log(callback);
    this.list.push(callback);
  },

  // 发布
  publish(text) {
    // 遍历所有的list，将回调函数执行
    this.list.forEach((callback) => {
      callback && callback(text);
    });
  },
};

// FilmItem 与 FilmDetail通信
class MyApp extends Component {
  state = {
    filmList: [],
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
            <FilmItem key={item.filmId} {...item} />
          ))}
        </div>

        <FilmDetail />
      </div>
    );
  }
}

export default MyApp;

const FilmItem = (props) => {
  const { name, poster, actors, synopsis } = props;
  return (
    <div
      className="filmItem"
      onClick={() => {
        bus.publish(synopsis);
      }}
    >
      <img src={poster} alt={name} />
      <div>
        <p>{name}</p>
        <p>主演：{actors.map((item) => item.name).join(' ')}</p>
      </div>
    </div>
  );
};

class FilmDetail extends Component {
  state = {
    info: '',
  };

  // 组件一上来就要订阅
  componentDidMount() {
    bus.subscribe((value) => {
      this.setState({
        info: value,
      });
    });
  }

  render() {
    return <div className="filmDetail">{this.state.info || '--'}</div>;
  }
}
```

### <4> 跨组件通信

### 所有想要通信的子组件必须包裹在 GlobalContext 定义的父组件内

```md
#### context 通信模式：生产者消费者模式

#### 1.把父组件当成生产者，使用 GlobalContext.Provider 包裹起来，传递 value 属性

#### 2.想要通信的子组件当成消费者，使用 GlobalContext.Consumer 包裹起来，里面使用回调函数取的共享状态的 value 属性，共享父组件的 value 属性
```

```js
import React, { Component } from 'react';
import axios from 'axios';
import './css/兄弟组件通信.css';

const GlobalContext = React.createContext(); // 创建一个生产者-供应商

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
        <GlobalContext.Provider
          value={{
            info: this.state.info,
            changeInfo: (value) => {
              this.setState({
                info: value,
              });
            },
          }}
        >
          <div>
            {this.state.filmList.map((item) => (
              <FilmItem key={item.filmId} {...item} />
            ))}
          </div>

          <FilmDetail />
        </GlobalContext.Provider>
      </div>
    );
  }
}

export default MyApp;

const FilmItem = (props) => {
  const { name, poster, actors, synopsis } = props;
  return (
    <GlobalContext.Consumer>
      {(value) => {
        return (
          <div
            className="filmItem"
            onClick={() => {
              value.changeInfo(synopsis);
            }}
          >
            <img src={poster} />
            <div>
              <p>{name}</p>
              <p>主演：{actors.map((item) => item.name).join(' ')}</p>
            </div>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};

function FilmDetail() {
  return (
    <GlobalContext.Consumer>
      {(value) => {
        // console.log(value);
        return <div className="filmDetail">{value.info ?? '--'}</div>;
      }}
    </GlobalContext.Consumer>
  );
}
```

### <5> 跨组件通信

### redux 状态管理

### 14. 生命周期

### <1> 初始化：componentWillMount -> render -> componentDidMount

### a. UNSAFE_componentWillMount：16.2 版本后废弃，该状态是第一次上树前最后一次修改 state 的状态，dom 树还没渲染，只会执行一次。

### b.render

### c.componentDidMount：dom 树渲染完毕，只会执行一次。

### 数据请求 axios、订阅函数调用、setInterval、基于创建完的 dom 进行初始化(BetterScroll)

### <2> 更新阶段：render -> componentWillUpdate -> render -> componentDidUpdate

### a.render

### b.UNSAFE_componentWillUpdate：16.2 版本后废弃，更新之前的状态值。

### c.render

### d.componentDidUpdate：获取更新后的 dom 节点。缺点是：会执行多次，添加标志位进行判断。componentWillUpdate 有 2 个参数，prevProps 和 prevState，老的属性和老的状态

### 老的状态：prevState

### 老的属性：prevProps

```js
import React, { Component } from 'react';
import axios from 'axios';
import BetterScroll from 'better-scroll';

class MyApp extends Component {
  state = {
    myname: 'qiu',
    filmList: [],
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
      this.setState(
        {
          filmList: res.data.data.films,
        }
        // , () => {
        //   console.log(document.getElementById("wrapper"));
        //   new BetterScroll("#wrapper");
        // }
      );
    });
  }

  UNSAFE_componentWillUpdate() {
    console.log(
      '更新之前的state状态',
      document.getElementById('myname').innerHTML
    ); //qiu
  }

  componentDidUpdate(prevProps, prevState) {
    // 更新后，想要获取dom节点
    // 缺点：会执行多次，添加标志位-使用老的属性或状态去判断，避免重复执行
    console.log(
      '更新之后的state状态',
      document.getElementById('myname').innerHTML
    ); //QIU
    // console.log(prevState); // 上一次的state，只有第一次的时候filmList是空的
    if (!prevState.filmList.length) {
      new BetterScroll('#wrapper');
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: 'QIU',
            });
          }}
        >
          click
        </button>
        <p id="myname">{this.state.myname}</p>
        <div
          id="wrapper"
          style={{
            height: 100,
            cursor: 'pointer',
            background: 'yellow',
            overflow: 'hidden',
            userSelect: 'none',
          }}
        >
          <ul>
            {this.state.filmList.map((item) => {
              return <li key={item.filmId}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyApp;
```

### e.shouldComponentUpdate：

### 该生命周期是为了防止无效的 diff 算法计算，作为优化性能的生命周期。返回 true 会渲染，返回 false 不会渲染。参数是下一次的 props 属性和下一次的 state 状态。

### 老的状态：this.state 新的状态：nextState

### 老的属性：this.props 新的属性：nextProps

```js
import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    myname: 'qiu',
  };

  UNSAFE_componentWillUpdate() {
    console.log('UNSAFE_componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    // 该案例中已经点击了click把myname改为QIU，但是每次再次点击还是会执行生命周期以及render重新渲染
    // console.log(this.state, nextState);
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }
    return false;
  };

  render() {
    console.log('render');
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: 'QIU',
            });
          }}
        >
          click
        </button>
        {this.state.myname}
      </div>
    );
  }
}

export default MyApp;
```

### f.UNSAFE_componentWillReceiveProps：该生命周期只能用于子组件，在父组件修改属性时触发

### <3> 销毁阶段

### a.componentWillUnMount：当组件销毁时，挂载在 window 上的事件没有销毁掉，在这个生命周期销毁。常见于卸载挂在 window 上的事件，卸载定时器等

```js
import React, { Component } from 'react';

class Child extends Component {
  state = {
    num: 0,
  };

  timer = null;

  componentDidMount() {
    // 窗口的变化
    window.onresize = () => {
      console.log('resize');
    };
    // 定时器
    this.timer = setInterval(() => {
      console.log('setInterval');
      this.setState((prevState) => ({
        num: prevState.num + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // 清除window上挂载的事件
    window.onresize = null;
    // 清除定时器
    clearInterval(this.timer);
  }

  render() {
    return <div>Child {this.state.num}</div>;
  }
}

class MyApp extends Component {
  state = {
    isShow: true,
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        >
          click
        </button>
        {this.state.isShow && <Child />}
      </div>
    );
  }
}

export default MyApp;
```

### 15. 新生命周期

### a. getDerivedStateFromProp：从属性中获取衍生的状态，把属性转换为状态。第一次初始化，自己更新，父传子，都会触发这个生命周期。类属性，this 指向 undefined，没有 this.state

### return 一个对象，return 的结果会与 state 进行合并覆盖，配合 componentDidUpdate 进行异步请求

### nextProps-最新的属性 nextState-最新的状态

### 初始化中代替 componentWillMount，父传子代替 componentWillReceivveProps

### b.getSnapshotBeforeUpdate：在更新之前记录下快照，返回一个值

### 执行顺序：render -> getSnapshotBeforeUpdate -> componentDidUpdate

### 15. React Hooks

### hooks 好处：

### 1.class 组件生命周期复杂，hooks 简化了生命周期逻辑的复杂度。

### 2.函数组件引用的时候不需要 new 出来，节省了内存空间

### vscode 快捷键：rfc

### a. useState：状态钩子函数

### 参数是数组的解构而来。缓存了状态，因为每次 useState 改变了之后，整个函数都会重新渲染，但是 state 的值却在上次的基础上更新，所以 useState 有缓存变量的作用。 - 闭包的原理

```js
const [list, setlist] = useState([]);
```

### b. useEffect：副作用钩子函数

### 依赖项为[] = componentDidMount，只会执行一次

### 依赖项[name]一改变，就会执行 useEffect 函数 = componentDidUpdate

### 回调函数内再 return 出一个回调函数 = componentWillUnMount，只会执行一次

### c. useCallback：记忆函数，性能优化。

### 每次 useState 更新，函数都会重新创建一次，所以每次定义的函数都会重新定义一遍，很消耗性能。useCallback 是让跟依赖项不相关的 useState 改变时，返回的函数是缓存中的函数，如果依赖项改变，useCallback 是需要重新创建的。

### d. useMemo：记忆函数，计算属性，性能优化

### useMemo 相当于 vue 的计算属性，返回一个结果，返回的结果可以是任意类型。useMemo 也是记忆组件，缓存数据的作用，当依赖项改变时，重新创建新的函数计算；若依赖项没改变，从缓存中读取数据。useMemo 这段函数比 useEffect 还先执行，所以 useMemo 内取的 state 值一开始都是初始化的值

```js
const getDataList = useMemo(() => [1, 2, 3], []);
{
  getDataList.map((item) => <p key={item}>{item}</p>);
}
```

### e. useRef

### 1.获取原生 dom 节点

```js
const myRef = useRef();
<input ref={myRef} />
<button onClick={() => {
  console.log(myRef.current.value);
}}>click</button>
```

### 2.获取子组件的实例

```js
// 父组件
const childRef = useRef(null);
<Child ref={childRef} type={0} />
<button onClick={() => {
  // console.log(childRef.current); 子组件的实例
  childRef.current.setname("QIU");
}}>change-child-name</button>

// Child组件
const Child = forwardRef((props, ref) => {
  // console.log(props, ref);
  const [name, setname] = useState("qiu");

  // 把方法暴露在ref的current下
  useImperativeHandle(
    ref,
    () => ({
      name,
      setname
    }),
  );

  return <div>Child-{name}</div>;
});
```

### 3.保存变量：函数组件重新渲染变量会存储上一次的值，实现类似 useState 保存变量功能

```js
const countRef = useRef(0);
<p>{countRef.current}</p>;
<button
  onClick={() => {
    countRef.current++;
  }}
>
  change-count
</button>;
```

### f. useContext：跨函数组件通信钩子函数

### 简化了 class 类组件的写法，class 类组件消费者要在回调函数里面才能拿到共享 value，使用 useContext 可以直接拿到共享 value

```md
- 1.创建共享中心：const GlobalContext = React.createContext();
- 2.把父组件当生产者，需要传的值放在 value 属性里
- <GlobalContext.Provider value={{
     detailInfo,
     setdetailInfo
   }}>
  </GlobalContext.Provider>
- 3.把子组件当消费者：const value = useContext(GlobalContext);
```

### g. useReducer：状态钩子函数

### useReducer 把状态全部抽离出去外面管理，降低组件内数据层与视图层的耦合度。先定义好 initialState 和 reducer 函数，useReducer 只能写在父组件上，然后结合 useContext 把状态和触发函数传递给子组件。

### useReducer 缺点：useReducer 不能实现异步请求

```js
import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

const GlobalContext = React.createContext();

const initialState = {
  filmList: [],
  detailInfo: '',
};

const reducer = (prevState, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case 'setFilmList':
      newState.filmList = action.value;
      return newState;

    case 'setDetailInfo':
      newState.detailInfo = action.value;
      return newState;

    default:
      return prevState;
  }
};

export default function MyApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * useReducer不能实现异步请求，redux可以，依靠中间件
   */
  useEffect(() => {
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
      dispatch({
        type: 'setFilmList',
        value: res.data.data.films,
      });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        {state.filmList.map((item) => (
          <FilmItem key={item.filmId} {...item} />
        ))}
        <FilmDetail />
      </div>
    </GlobalContext.Provider>
  );
}

const FilmItem = ({ name, poster, synopsis }) => {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div
      style={{ marginBottom: 10 }}
      onClick={() =>
        dispatch({
          type: 'setDetailInfo',
          value: synopsis,
        })
      }
    >
      <img
        src={poster}
        alt={name}
        style={{
          width: 100,
          height: 100,
          marginRight: 10,
          cursor: 'pointer',
        }}
      />
      <span>电影名称：{name}</span>
    </div>
  );
};

const FilmDetail = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div
      style={{
        background: 'yellow',
        width: 300,
        height: 300,
        position: 'fixed',
        right: 0,
        top: 0,
      }}
    >
      FilmDetail-{state.detailInfo}
    </div>
  );
};
```

### h. 自定义 hooks

### 复用组件逻辑，更加符合函数式编程。每次调用自定义 hooks，都会引起组件重新渲染，命名必须以 use 开头
