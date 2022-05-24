
// import _ from 'lodash';
// const readline = require('readline');

// // define question/output interface
// const rl = readline.createInterface({
//   // readable stream
//   input: process.stdin,
//   // writeable stream
//   output: process.stdout
// });
// interface stud {
//   name: nam;
//   num?: string;
//   mail?: string; 
// }
// interface nam {
//   fname:string;
//   lname:string;
// }
// interface Undergrad extends stud {
//   major: string;
//   readonly id: number;
// }
// const a = 4,
//   b = 4,
//   c = '5' ,
//   d = 'cat';
// let  f :(number|string|number)[];
// f=[1,'2',3];
// const mult = (num1: number, num2: number) =>  {
//   console.log(`${num1} * ${num2} =`, num1 * num2);
// };
// const add = (num1: string, num2: string) => {
//   console.log(`${num1} + ${num2} =`, num1 + num2);
// };
// const hhh = ( arr: any  ) :void=> {
// for(let i=0;i<3;i++)
// {
//   console.log(arr[i]);
// }
// };
// mult(a, b);

// add(d, c);
// hhh(f);
// // const stud = {
// //   fname:'mo',
// //   lname:'salah',
// //   nam:'+201144824854',
// //   mail:'malkang75@gmail.com'
// // };
// // stud.nam='mmm'

// const stud1: Undergrad = {
//   major:'mmm',
//   name:{
//     fname:'mo',
//     lname:'no'
//   },
//   id:35455
// };
// // stud1.id:78688768;
// console.log(stud1);
// type sss ={
//   nnn:string;
//   nn:number; 
// };
// type PhD = sss & {
//   fff:string;
// }
// const st:PhD={
//   nnn:'mmm' , nn:6867, fff:'fh'
// }
// console.log(st);
// interface sw{
//   name:string,
//   age:number,
//   greet():void;
// }
// const gg =(name:string, age:number) : sw => {
//   const greet= ():void => console.log('hhh');
//   return {name,age,greet};
// }
// const sw1 = gg('sd' ,1232);
// console.log(sw1);
// console.log( _.add(8,8));
// console.log( _.dropRight([1,5,9,8],2));
// _.multi(2,4);
// const myFunc = (num: number): number => {
//   return num * num;
// };

// export default myFunc;
import express from 'express';
import routes from './routes/main';
const app =express();
const port =5000;

app.use('/',routes);
console.log('done');
app.listen(port , () =>{
  console.log(`listen on port: ${port}`);
}
);
export default app;