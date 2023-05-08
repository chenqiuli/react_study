
// redux-saga
// 非侵入式的结合redux开发，引入redux的任务和effect任务，让处理异步更加优美
// 用了ES6的generator生成器提供异步编程的解决方案，是一个状态机，可以让一个函数中断执行
// yield让生成器函数中断





/**
 * generator函数在执行时可以暂停，后面又可以恢复执行，也称协程函数。
 * 使用：function *test() 定义，函数内部使用yield表达式来暂停执行函数，通过next()方法继续执行，同
 * 时可以将参数传递给yield表达式。 
 * 
 * generator配合
 * 
 * 
 * 
 */




function* test () {
  console.log(111);
  const aaa = yield "111-输出";
  console.log(222, aaa);
  const bbb = yield "222-输出";
  console.log(333, bbb);
  const ccc = yield "333-输出";
  console.log(444, ccc);
}

const qtest = test();
const res1 = qtest.next();
console.log(res1); // 返回value和done
const res2 = qtest.next('aaa');
console.log(res2);
const res3 = qtest.next('bbb');
console.log(res3);
const res4 = qtest.next('ccc');
console.log(res4); // 执行完成done=true