import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';


const alovaInstance = createAlova({
  // 假设我们需要与这个域名的服务器交互
  baseURL: 'https://m.maizuo.com',

  // ReactHook可以帮我们调用useState创建请求相关的，可以被Alova管理的状态，包括请求状态loading、响应数据data、请求错误对象error等（后续详细介绍）
  statesHook: ReactHook,

  // 请求适配器，我们推荐并提供了fetch请求适配器
  requestAdapter: GlobalFetch()
});

// 创建一个Get实例，描述一次Get请求的信息
const todoListGetter = alovaInstance.Get('/gateway', {
  // 请求头
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
    'X-Host': 'mall.film-ticket.city.list'
  },
  params: {
    k: 8913525
  }
});

export { todoListGetter };