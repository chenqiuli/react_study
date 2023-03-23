# call、apply、bind 的用法

### 1、老生常谈的问题，this 指向，我们经常听到这句话：谁调用 this 就指向谁，如：

```js
const obj1 = {
  name: 'obj1',
  getName() {
    console.log(this.name);
  },
};

const obj2 = {
  name: 'obj2',
  getName() {
    console.log(this.name);
  },
};

obj1.getName(); // obj1
obj2.getName(); // obj2
```

### 2、但是我们常常需要修改 this 指向，这个时候 call、apply、bind 的第一个参数都是用来改变 this 指向的，如：

```js
// 把this指向obj2
obj1.getName.call(obj2); // obj2
obj1.getName.apply(obj2); // obj2
obj1.getName.bind(obj2)(); // obj2
```

### 三者区别：call 和 apply 会自动执行函数，bind 不会自动执行，需要手动加小括号执行

### 3、关于 call、apply、bind 的传参区别：call 是挨个挨个传参，apply 是以数组形式传参，bind 可以挨个挨个传，也可以放在数组里挨个挨个传

```js
const obj1 = {
  name: 'obj1',
  getName(fm = 'A', to = 'B') {
    console.log(this.name + '，来自' + fm + '去往' + to);
  },
};

const obj2 = {
  name: 'obj2',
  getName() {
    console.log(this.name);
  },
};

obj1.getName.call(obj2, '汕头', '广州'); // obj2，来自汕头去往广州
obj1.getName.apply(obj2, ['汕头', '广州']); // obj2，来自汕头去往广州
obj1.getName.bind(obj2, '汕头', '广州')(); // obj2，来自汕头去往广州
obj1.getName.bind(obj2, ['汕头'], ['广州'])(); // obj2，来自汕头去往广州
```

## 订阅发布模式，再听几遍
