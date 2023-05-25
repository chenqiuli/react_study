import request from '../utils/request';

export function getCinemaList () {
  return request('https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3465877', {
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
      'X-Host':
        'mall.film-ticket.cinema.list'
    }
  }).then(res => res.data.data.cinemas);
}
