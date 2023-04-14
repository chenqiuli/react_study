import React, { useState } from 'react';
import { fromJS } from "immutable";

/**
 * fromJS：把immutable对象转为普通js对象
 * setIn：修改多层级键的值 setIn([],xx)
 * getIn：获取多层级键的值 getIn([])
 * updateIn：修改List数组的键 updateIn([],value => xxx)
 * 
 */

export default function App () {
  const obj = {
    name: "aaa",
    location: {
      province: "广东省",
      city: "广州市"
    },
    favor: ["睡觉", "玩游戏", "吃美食"]
  };

  const [data, setdata] = useState(fromJS(obj));

  // console.log(data.toJS());

  return (
    <div>
      <button onClick={() => {
        // setdata(data.set("name", "bbb"));
        setdata(data.setIn(["name"], "bbb"));
      }}>修改姓名</button>
      <p>
        姓名：{data.get("name")}
      </p>
      <button onClick={() => {
        setdata(data.setIn(["location", "province"], "浙江省").setIn(["location", "city"], "嘉兴市"));
      }}>修改籍贯</button>
      <p>
        籍贯：{data.getIn(["location", "province"])}-{data.getIn(["location", "city"])}
      </p>
      <div>
        {data.getIn(["favor"]).map((item, index) => (
          <div>
            <span key={item}>{item}</span>
            <button onClick={() => {
              setdata(data.updateIn(["favor"], value => value.splice(index, 1)));
            }}>删除</button>
            <button onClick={() => {
              setdata(data.setIn(["favor", index], "和男朋友去玩"));
            }}>修改</button>
          </div>
        ))}
      </div>
    </div>
  );
}