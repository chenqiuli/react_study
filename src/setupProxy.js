// 反向代理后端的接口，解决跨域，改文件更改之后需要重启服务器

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    })
  );

  // 被代理拦截，由服务器转发给localhost:9000，
  app.use(
    '/graphqldb',
    createProxyMiddleware({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
};

