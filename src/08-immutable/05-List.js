import React, { useState } from 'react';
import { List } from "immutable";


/* 对数组进行任何操作，不会改变原数组 */
const arr1 = List([1, 2, 3]);
const arr2 = arr1.push(4);
const arr3 = arr2.unshift(0);
const arr4 = arr3.concat([5, 6, 7]);
console.log(arr1.toJS(), arr2.toJS(), arr3.toJS(), arr4.toJS());

export default function App () {
  const [arr] = useState(List(["aaa", "bbb", "ccc",]));
  return (
    <div>
      <ul>
        {arr.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
