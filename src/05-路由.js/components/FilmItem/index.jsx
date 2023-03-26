import React from 'react';
import './index.css';

export default function index(props) {
  const { item } = props;
  return (
    <div key={item.filmId} className="filmItem">
      <div>
        <img src={item.poster} alt={item.name} />
      </div>
      <div className="content">
        <p>
          <span className="name">{item.name}</span>
          <span className="filmType">{item.filmType.name}</span>
        </p>

        <p className="other" style={{ opacity: item.grade ? 1 : 0 }}>
          观众评分<span className="grade">{item.grade}</span>
        </p>

        <p className="other actors">
          主演：{item.actors.map((ele) => ele.name).join(' ')}
        </p>
        <p className="other">
          {item.nation} | {item.runtime}分钟
        </p>
      </div>
      <div className="buy">购票</div>
    </div>
  );
}
