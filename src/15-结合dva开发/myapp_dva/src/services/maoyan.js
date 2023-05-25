import request from '../utils/request';

export function getMaoyanList () {
  return request('/api/mmdb/movie/v3/list/hot.json?ct=%E5%B9%BF%E5%B7%9E&ci=20&channelId=4',).then(res => res.data.data.hot);
}
