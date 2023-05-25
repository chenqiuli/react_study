import React, { useState, useEffect } from "react";
import request from "../utils/request";

export default function Film(props) {
  const [films, setfilms] = useState([]);

  useEffect(() => {
    request(
      "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3946794",
      {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }
    ).then((res) => {
      // console.log(res.data.data.films);
      setfilms(res.data.data.films);
    });
  }, []);

  return (
    <div>
      <div>
        {films.map((item) => {
          return (
            <div
              key={item.filmId}
              onClick={() => {
                console.log(props);
                props.history.push(`/detail/${item.filmId}`);
              }}
            >
              <span>{item.name}</span>
              <img
                src={item.poster}
                alt={item.name}
                style={{
                  width: "100px",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
