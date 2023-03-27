import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

export default function FilmItem(props) {
  const { item } = props;

  const history = useHistory();

  const handleClick = () => {
    // 动态路由
    // history.push(`/filmdetail/${item.filmId}`);
    // query传参
    // history.push({
    //   pathname: '/filmdetail',
    //   query: {
    //     id: item.filmId,
    //   },
    // });
    // state传参
    history.push({
      pathname: '/filmdetail',
      state: {
        id: item.filmId,
      },
    });
  };

  return (
    <div key={item.filmId} className="filmItem" onClick={handleClick}>
      <div>
        <img src={item.poster} alt={item.name} />
      </div>
      <div className="content">
        <p>
          <span className="name">{item.name}</span>
          <span className="filmType">{item.filmType.name}</span>
        </p>

        {item.grade && (
          <p className="other">
            观众评分<span className="grade">{item.grade}</span>
          </p>
        )}

        <p className="other actors">
          主演：{item.actors.map((ele) => ele.name).join(' ')}
        </p>
        <p className="other">
          {item.nation} | {item.runtime}分钟
        </p>
      </div>
      {item.isPresale && <div className="buy">购票</div>}
    </div>
  );
}
