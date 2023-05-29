import React, { Component } from 'react';

class FilmItem extends Component {
  render() {
    const { item, navigate } = this.props;

    return (
      <li
        key={item.filmId}
        onClick={() => {
          navigate(`/detail/${item.filmId}`);
        }}
      >
        {item.name}
      </li>
    );
  }
}

export default FilmItem;
