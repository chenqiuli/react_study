/**
 * 虚拟DOM：虚拟DOM是用js模拟一颗dom树，放在浏览器内存中，在js和真实dom中加了一个缓存， 利用diff算法避免了不必要的dom操作，提高性能。
 * 虚拟DOM的对象结构：
 * {
 *  type: 'div',
 *  key: 唯一标识,
 *  text: "neirong",
 *  props: children
 * }
 * 
 * diff算法对比的是虚拟DOM，对比完后找到最优解，变更到真实DOM，减少重绘与回流。在列表中设置key值，前后会生成一份虚拟dom，在对* 列表进行删除增加或调整位置时，diff算法会对前后两颗虚拟dom树进行对比，对比到有不同的节点会打一个补丁，等到全部对比完再以最小
 * 的代价更新真实dom。
 * 
 * 设置key值：为了列表复用和重排，提高性能
 * 
 * diff算法是用什么排序：
 * 1、tree diff：同层级对比，父跟父比，孩子跟孩子比
 * 2、component diff：类组件对比，两个class名一样就对比，不一样就删掉
 * 3、element diff：
 * 
 */