import React, { useState, useEffect } from 'react';
import styles from '../css/city.module.css';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import store from '../redux/store';
import getCinemaList from '../redux/actionCreators/getCinemaList';

export default function City(props) {
  const [hotCity, sethotCity] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?k=3553356',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.city.list',
      },
    }).then((res) => {
      // console.log(res.data);
      const {
        data: { cities },
      } = res.data ?? {};
      const hotCities = cities.filter((item) => item.isHot === 1);
      sethotCity(hotCities);
    });
  }, []);

  const handleClick = (item) => {
    store.dispatch({
      type: 'change_city',
      payload: {
        cityName: item.name,
        cityId: item.cityId,
      },
    });
    store.dispatch(getCinemaList(store.getState().cityReducer.get('cityId')));
    props.history.goBack();
  };

  return (
    <div className={styles.city}>
      <div className={styles.header}>
        <span
          onClick={() => {
            props.history.goBack();
          }}
        >
          <CloseOutlined />
        </span>
        <span
          style={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          当前城市
        </span>
      </div>
      <div className={styles.hotCity}>
        <p>热门城市</p>
        <ul>
          {hotCity.map((item) => (
            <li key={item.cityId} onClick={() => handleClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}