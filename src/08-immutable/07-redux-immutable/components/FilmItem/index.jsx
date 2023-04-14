import React from 'react';
import styles from './index.module.css';
import { useHistory } from 'react-router-dom';

export default function FilmItem(props) {
  const { item } = props;

  const history = useHistory();

  const handleClick = () => {
    // 动态路由
    history.push(`/filmdetail/${item.filmId}`);
    // query传参
    // history.push({
    //   pathname: '/filmdetail',
    //   query: {
    //     id: item.filmId,
    //   },
    // });
    // state传参
    // history.push({
    //   pathname: '/filmdetail',
    //   state: {
    //     id: item.filmId,
    //   },
    // });
  };

  return (
    <div key={item.filmId} className={styles.filmItem} onClick={handleClick}>
      <div>
        <img src={item.poster} alt={item.name} />
      </div>
      <div className={styles.content}>
        <p>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.filmType}>{item.filmType.name}</span>
        </p>

        {item.grade && (
          <p className={styles.other}>
            观众评分<span className={styles.grade}>{item.grade}</span>
          </p>
        )}

        <p className={`${styles.other} ${styles.actors}`}>
          主演：{item.actors.map((ele) => ele.name).join(' ')}
        </p>
        <p className={styles.other}>
          {item.nation} | {item.runtime}分钟
        </p>
      </div>
      {item.isPresale && <div className={styles.buy}>购票</div>}
    </div>
  );
}
