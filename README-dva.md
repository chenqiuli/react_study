## 整合了 React Router、Redux、Redux Saga 的 dva + React 开发

- 创建项目

```bash
npm i dva -g
dva new myapp-dva
```

- .roadhogrc.mock.js 引入 mock 文件

- .webpackrc 配置反向代理

- mock 文件

```js
export default {
  'GET /users': { name: '小秋', age: 18, location: '广东广州' },

  'POST /users/login': (req, res) => {
    // console.log(req.body);
    const { username, password } = req.body ?? {};
    if (username === 'admin' && password === 123) {
      res.send({
        ok: 1,
      });
    } else {
      res.send({
        ok: 0,
      });
    }
  },
};
```
