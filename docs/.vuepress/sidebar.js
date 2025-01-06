// {
//   text: 'Group 1',   // 必要的
//   link: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//   collapsable: false, // 可选的, 默认值是 true,
//   sidebarDepth: 1,    // 可选的, 默认值是 1
//   children: [
//     '/'
//   ]
// },
// 侧边栏配置
export default [{
  text: 'Hello Word！',
  link: '/guide/'
}, {
  text: '网页基础',
  link: '/browser/',
  collapsible: true,
  children: [{
    text: '1. 重绘和重排（回流）',
    link: '/browser/1'
  }, {
    text: '2. 浏览器中输入URL到页面显示的全过程',
    link: '/browser/2'
  }]
}, {
  text: 'JS基础',
  link: '/JavaScript/',
  collapsible: true,
  children: [{
    text: '1. 深拷贝和浅拷贝',
    link: '/JavaScript/1'
  }, {
    text: '2. 内存泄漏',
    link: '/JavaScript/2'
  }, {
    text: '3. 箭头函数和普通函数的区别',
    link: '/JavaScript/3'
  }, {
    text: '4. 跨域专题',
    link: '/JavaScript/4'
  }, {
    text: '5. typeof和instanceof的区别',
    link: '/JavaScript/5'
  }, {
    text: '6. 数据类型的隐式转换',
    link: '/JavaScript/6'
  }, {
    text: '7. 闭包',
    link: '/JavaScript/7'
  }, {
    text: '8. 作用域与作用域链',
    link: '/JavaScript/8'
  }, {
    text: '9. 事件循环（宏任务、微任务）',
    link: '/JavaScript/9'
  }, {
    text: '10. 原型链',
    link: '/JavaScript/10'
  }, {
    text: '11. 对象的集成',
    link: '/JavaScript/11'
  }, {
    text: '12. 模块化开发（AMD、ES6、CommonJS）',
    link: '/JavaScript/12'
  }, {
    text: '13. IEFI 立即执行函数',
    link: '/JavaScript/13'
  }, {
    text: '14. 事件冒泡、捕获、委托',
    link: '/JavaScript/14'
  }, {
    text: '15. 防抖和节流',
    link: '/JavaScript/15'
  }, {
    text: '16. 判断对象相等',
    link: '/JavaScript/16'
  }, {
    text: '17. 对象的遍历',
    link: '/JavaScript/17'
  }, {
    text: '18. JS异步编程',
    link: '/JavaScript/18'
  }, {
    text: '19. 对象的创建',
    link: '/JavaScript/19'
  }, {
    text: '20. this的指向',
    link: '/JavaScript/20'
  }, {
    text: '21. 严格模式',
    link: '/JavaScript/21'
  }, {
    text: '22. 判断对象的类型',
    link: '/JavaScript/22'
  }]
}, {
  text: 'Vue相关',
  link: '/vue/',
  collapsible: true,
  children: [{
    text: '1. Vue的组件通信',
    link: '/vue/1'
  }, {
    text: '2. Vuex专题',
    link: '/vue/2'
  }, {
    text: '3. Vue2和Vue3的区别',
    link: '/vue/3'
  }]
}, {
  text: '网络相关',
  link: '/network/',
  collapsible: true,
  children: [{
    text: '1. 正向代理和反向代理',
    link: '/network/1'
  }]
}]