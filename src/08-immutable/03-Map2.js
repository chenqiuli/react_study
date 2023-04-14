import React, { useState } from 'react';
import { Map } from "immutable";

// get方法展示immutable对象
export default function App () {
  const obj = Map({
    name: "aaa",
    score: 19,
    arr: [1, 2, 3],
    obj: Map({
      age: 18,
      nation: "China",
      school: "广工"
    })
  });

  const [data, setdata] = useState(obj);

  console.log(data.toJS());

  return (
    <div>
      {data.get("name")}
      <button onClick={() => {
        setdata(data.set("name", "bbb").set("score", 22));
      }}>click</button>

      <ul>
        {data.get("arr").map(item => <li key={item}>{item}</li>)}
      </ul>

    </div>
  );
}




