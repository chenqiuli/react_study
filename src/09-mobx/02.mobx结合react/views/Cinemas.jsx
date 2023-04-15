import React, { useState, useEffect } from 'react';
import '../css/cinemas.module.css';
import { autorun } from 'mobx';
import store from '../mobx/store';
import { Observer } from 'mobx-react';
import styles from '../css/cinemas.module.css';

export const CinemaItem = (item) => {
  const price = String(item.lowPrice * 0.01).includes('.')
    ? (item.lowPrice * 0.01).toFixed(1)
    : item.lowPrice * 0.01;
  return (
    <div className={styles.cinemaItem}>
      <div className={styles.top}>
        <p>{item.name}</p>
        <p>￥{price}起</p>
      </div>
      <div className={styles.bottom}>
        <p>{item.address}</p>
        <p>距离未知</p>
      </div>
    </div>
  );
};

export default function Cinemas() {
  // const [cinemaList, setcinemaList] = useState([]);
  useEffect(() => {
    if (!store.cinemaList.length) {
      store.fetchCinemaList();
    }
  }, []);

  // useEffect(() => {
  //   if (!store.cinemaList.length) {
  //     store.fetchCinemaList();
  //   }

  //   const unsubscribe = autorun(() => {
  //     console.log(store.cinemaList, store.isShowTabbar);
  //     setcinemaList(store.cinemaList);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <div className="qiuli">
      <Observer>
        {() => {
          return store.cinemaList?.map((item) => (
            <CinemaItem key={item.cinemaId} {...item} />
          ));
        }}
      </Observer>
    </div>
  );
}
