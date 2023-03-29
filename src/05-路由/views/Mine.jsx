import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Icon4 from '../assets/icon4.png';
import styles from '../css/mine.module.css';
import { RightOutlined } from '@ant-design/icons';

function Mine(props) {
  const [list] = useState([
    {
      text: '电影订单',
      icon: Icon1,
      path: '/filmsorder',
    },
    {
      text: '组合红包',
      icon: Icon2,
      path: '/redpacket',
    },
    {
      text: '帮助与客服',
      icon: Icon3,
      path: '/help',
    },
    {
      text: '设置',
      icon: Icon4,
      path: '/setting',
    },
  ]);

  return (
    <div className={styles.mine}>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                props.history.push(item.path);
              }}
            >
              <p>
                <span>
                  <img src={item.icon} alt={item.text} />
                </span>
                <span>{item.text}</span>
              </p>
              <p>
                <RightOutlined />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default withRouter(Mine);
