import axios from "axios";


/**
 * redux-thunk中间件风格：
 * actionCreator内如果是同步返回一个普通js对象，{type:"xx",payload:xx}
 * 如果是异步返回一个函数，需要redux-thunk这个外挂支持
 */
function getCinemaList (cityId) {
  return (dispatch) => {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=4558896`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      // console.log(res.data.data.cinemas);
      dispatch({
        type: "fetch_cinemaList",
        payload: res.data.data.cinemas
      });
    });
  };
}

/**
 * redux-promise中间件风格：
 * Promise三种状态：fulfilled，pending，reject
 */
// function getCinemaList (cityId) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=4558896`,
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.cinema.list'
//     }
//   }).then((res) => {
//     // console.log(res.data.data.cinemas);
//     return {
//       type: "fetch_cinemaList",
//       payload: res.data.data.cinemas
//     };
//   });
// }




export default getCinemaList;