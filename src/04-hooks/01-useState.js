import React, { useState } from 'react';

export default function MyApp () {
  const [list, setlist] = useState(["科目一", "科目二", "科目三"]);
  const [text, settext] = useState("");

  return (
    <div>
      <input type="text" onChange={(evt) => {
        settext(evt.target.value);
      }} value={text} />
      <button onClick={() => {
        setlist([...list, text]);
        settext("");
      }}>add</button>
      <ul>
        {list.map((item, index) => <li key={index}>
          {item}
          <button onClick={() => {
            const newlist = [...list];
            newlist.splice(index, 1); // 从index位置开始，删除1个元素，没有替换的元素
            setlist(newlist);
          }}>del</button>
        </li>)}
      </ul>
      {!list.length && <div>暂无待办事项</div>}
    </div>
  );
}
