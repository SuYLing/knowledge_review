/**
 * 1. 更加简洁
 * 2. 无 this 绑定, 使用所在作用域的 this, 也就意味着不能使用 call apply bind 改变其指向
 * 3. 无 arguments 参数, 可用 rest 实现
 * */

const obj = {
  name: "yuling",
  age: 22,
  say1() {
    setTimeout(() => {
      console.log(`hello ${this.name} age ${this.age}`);
    });
  }, //此时报错
};
obj.say1(); // 正常
setTimeout(obj.say1, 0); // undefined
