import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import TitleCom from '../components/TitleCom/TitleCom';
import styles from '../css/cinemas.module.css';
import useFetchCinemaList from '../hooks/useFetchCinemaList';
import useScroll from '../hooks/useScroll';

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

export default function Cinemas(props) {
  const { isShow } = useScroll();
  const { cinemaList } = useFetchCinemaList();

  const handleSearch = () => {
    props.history.push('/cinemas/search');
  };

  return (
    <div>
      <p className="qiuli">Cinemas</p>
      {isShow && (
        <div className={styles.titleCom}>
          <TitleCom text="影院">
            <div>
              <SearchOutlined
                style={{ fontSize: '18px' }}
                onClick={handleSearch}
              />
            </div>
          </TitleCom>
        </div>
      )}
      {cinemaList.map((item) => (
        <CinemaItem key={item.cinemaId} {...item} />
      ))}
    </div>
  );
}
