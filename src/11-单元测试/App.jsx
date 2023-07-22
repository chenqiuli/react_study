import React, { useState } from 'react';

export default function App() {
  const [list, setlist] = useState(['111', '222', '333']);
  const [value, setvalue] = useState('');

  return (
    <div>
      <h1>Todolist的单元测试</h1>
      <input
        type="text"
        value={value}
        onChange={(evt) => {
          setvalue(evt.target.value);
        }}
      />
      <button
        onClick={() => {
          setvalue('');
          setlist([...list, value]);
        }}
      >
        add
      </button>
      {list.map((item, index) => (
        <li key={item}>
          {item}
          <button
            onClick={() => {
              const newlist = [...list];
              newlist.splice(index, 1);
              setlist(newlist);
            }}
          >
            del
          </button>
        </li>
      ))}
    </div>
  );
}
