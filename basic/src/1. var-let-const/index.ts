//#region var
/** 特性/存在问题
 * 1. 变量提升
 * 2. 无法形成词法作用域: 只有全局变量/函数变量; 通过 {} 就是一个作用域
 * 3. 可以任意改变, 重复声明
 */

for (var i = 0; i <= 10; i++) {
  console.log("第" + i + " 次");
  setTimeout(() => {
    console.log("i = ", i); // 全是 11
  });
  // 解决方案 iife
  (function (i: number) {
    console.log("iife i = " + i); // 正常
  })(i);
}
console.log(i); // 因为无法产生词法作用域, 所以这里可以访问到 i, 11

{
  var aa = 1;
}
console.log(aa, "aa"); // 成功 1
/** 该循环整个过程如下:
 * 1. var i 提升到全局作用域
 * 2. 执行 for
 * 3. 访问到全局作用域的 i
 * */
function var_test() {
  console.log(a); // undefined
  var a = 1;
  console.log(a); // 1

  /**
   * 1. 变量提升: var a;
   * 2. 执行 console, 此时 a = undefined
   * 3. 进行赋值操作: a = 1
   * */
}
// console.log(a); // 这样就会报错了, 因为函数是存在作用域的

// 暂时性死区, 此处抛出异常
var_test();
//#endregion
