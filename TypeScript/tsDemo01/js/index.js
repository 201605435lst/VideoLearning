"use strict";
// // var str:string="dcs"
// // var str="你说这个吗"
// // let arr: number [] = [1, 2, 1223];
// // let ddd=[]
// // ddd=[1.2,'siuv']
// // let arrs:Array<Number>=[1,2,23]
// // console.log(arrs);
// enum State{
//     success='成功',
//     error=2
// }
// console.log(State.error+State.success)
// let box:any=document.getElementById("box")
// box.style.color='red'
// function run() {
//     return 'run'
// }
// run ()
// var b=function(){
//     return 'run2'
// }
// b()
// function info(name:string,age:number):string{
// return `${name}-------${age}`
// }
// alert(info("asudhiuh",25))
// function run2():void{
// console.log("run")
// }
// run2()
// 三点运算符，接收新参传过来的值
// function sum(a:number,b:number,...res: number[]): number {
//   let sums = a+b;
//   for (let i = 0; i < res.length; i++) {
//     sums += res[i];
//   }
//   return sums;
// }
// console.log(sum(1, 2, 32));
function getInfo(name, age) {
    if (age) {
        return '我叫：' + name + '我的年龄是' + age;
    }
    else {
        return '我叫：' + name;
    }
}
alert(getInfo('zhangsan'));
// alert(getInfo(123));  错误
// alert(getInfo('zhangsan',20));
