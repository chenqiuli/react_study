import { observable, action, runInAction } from "mobx";
import axios from "axios";


class Store {
  @observable isShowTabbar = true; // 变成可观察数据
  @observable cinemaList = [];


  @action async fetchCinemaList () {
    const list = await axios({
      url: `https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=4558896`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      // console.log(res.data.data.cinemas);
      return res.data.data.cinemas;
    });
    // 处理异步
    runInAction(() => {
      this.cinemaList = list;
    });
  }

  @action showTabbar () {
    this.isShowTabbar = true;
  }

  @action hideTabbar () {
    this.isShowTabbar = false;
  }
}


// const store = observable({
//   isShowTabbar: true,
// }); 
const store = new Store();

export default store;