import React, { Component } from 'react';

class Tabbar extends Component {
  render () {
    const { list, activeIndex, eventActive } = this.props;
    return (
      <div {...this.props}>
        {list.map((item, index) => {
          return (
            <div
              key={item.id}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => {
                eventActive(index);
              }}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tabbar;