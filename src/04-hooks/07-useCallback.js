import React, { useCallback, useState } from 'react';

export default function MyApp () {
  const [list, setlist] = useState(["科目一", "科目二", "科目三"]);
  const [text, settext] = useState("");
  const [myname, setmyname] = useState("qiu");


  // 每次useState更新，函数都会重新创建一次，所以每次定义的函数都会重新定义一遍，很消耗性能。
  // 若是定义的函数是做了一大段递归，那就大大的消耗的性能。
  // 若是定义的函数是请求接口的逻辑处理，当依赖项改变才需要调接口，但是页面中不管什么state改变都会让整个函数组件重新渲染，所以所有定义的函数也都会重新定义一遍，因此很有必要对函数进行缓存
  // useCallback是让跟依赖项不相关的useState改变时，返回的函数是缓存中的函数，如果依赖项改变，useCallback是需要重新创建的
  // myname改变时，handleChange/handleAdd/handleDel返回的是缓存的函数，不是重新创建的函数
  const handleChange = useCallback(
    (evt) => {
      console.log("handleChange");
      settext(evt.target.value);
    },
    [text],
  );


  const handleAdd = useCallback(
    () => {
      console.log("handleAdd");
      setlist([...list, text]);
      settext("");
    },
    [text, list]
  );


  const handleDel = useCallback(
    (index) => {
      console.log("handleDel");
      const newlist = [...list];
      newlist.splice(index, 1); // 从index位置开始，删除1个元素，没有替换的元素
      setlist(newlist);
    },
    [list]
  );


  return (
    <div>
      <div>
        {myname}
        <button onClick={() => {
          setmyname("QIU");
        }}>changeName</button>
      </div>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {list.map((item, index) => <li key={index}>
          {item}
          <button onClick={() => handleDel(index)}>del</button>
        </li>)}
      </ul>
      {!list.length && <div>暂无待办事项</div>}
    </div>
  );
}
