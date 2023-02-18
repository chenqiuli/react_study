
const obj1 = {
  name: 'obj1',
  getName (fm = 'A', to = 'B') {
    console.log(this.name + "，来自" + fm + "去往" + to);
  }
};

const obj2 = {
  name: 'obj2',
  getName () {
    console.log(this.name);
  }
};

// 谁调用，this就指向谁
obj1.getName(); // obj1
obj2.getName(); // obj2


/**
 * 第一个参数都是修改this指向：
 * call：改变this，自动执行函数
 * apply：跟call一样，改变this，自动执行函数
 * bind：改变this，不会自动执行函数，需要加小括号手动执行
 * 
 * 第二个参数是传参不同：
 * call：挨个挨个传参
 * apply:所有参数在数组里统一传参
 * bind:挨个挨个传参，或者挨个挨个写在数组里传参
 */

// this指向obj2
obj1.getName.call(obj2); // obj2
obj1.getName.apply(obj2); // obj2
obj1.getName.bind(obj2)(); // obj2


obj1.getName.call(obj2, '汕头', '广州');
obj1.getName.apply(obj2, ['汕头', '广州']);
obj1.getName.bind(obj2, '汕头', '广州')();
obj1.getName.bind(obj2, ['汕头'], ['广州'])();


