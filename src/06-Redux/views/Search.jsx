import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from '../css/search.module.css';
import React, { useState, useMemo } from 'react';
import { CinemaItem } from './Cinemas';
import NoData from '../assets/nodata.png';
import useFetchCinemaList from '../hooks/useFetchCinemaList';

export default function Search(props) {
  const { cinemaList } = useFetchCinemaList();
  const [myValue, setmyValue] = useState('');

  const filterCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(myValue.toUpperCase()) ||
          item.address.toUpperCase().includes(myValue.toUpperCase())
      ),
    [myValue, cinemaList]
  );

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Input
          style={{ width: '85%', marginRight: '5%' }}
          placeholder="输入影院名称"
          prefix={<SearchOutlined />}
          value={myValue}
          onChange={(evt) => setmyValue(evt.target.value)}
        />
        <span
          onClick={() => {
            props.history.push('/cinemas');
          }}
        >
          取消
        </span>
      </div>

      {!myValue.length && (
        <div className={styles.nearArea}>
          <p>离你最近</p>
          <ul>
            {cinemaList.slice(0, 5).map((item) => {
              return <li key={item.cinemaId}>{item.name}</li>;
            })}
          </ul>
        </div>
      )}
      {myValue.length > 0 &&
        (filterCinemaList.length > 0 ? (
          filterCinemaList.map((item) => (
            <CinemaItem key={item.cinemaId} {...item} />
          ))
        ) : (
          <div className={styles.nodata}>
            <img src={NoData} alt="nodata" />
            <p>没有找到匹配的影院</p>
            <p>
              提示：仅支持搜索“影院”，建议您检
              <br />
              查输入的影院名称是否有误？
            </p>
          </div>
        ))}
    </div>
  );
}
