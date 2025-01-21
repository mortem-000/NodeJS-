// const sum = (x, y, output) => {
//     let temp = x + y;
//     output(temp);
// }

// let summ  = sum(10, 20, (result) => {
//     console.log('Sum:', result);
// });


//synchronous programming in javascript
// console.log('Start');
// function longTask(){
//     for (let i = 0; i < 1e9; i++){}
//     console.log('Long task completed');
// }
// longTask();
// console.log('End');

//asynchronous programming in javascript
// console.log('Start');
// setTimeout(() => {
//     console.log('Time Out Completed');
// },3000);
// console.log('Last');

//async/await
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const success = true;
//             if (success){
//                 resolve('Data fetched');
//             }
//             else{
//                 reject('Error occured');
//             }
//             },2000);
//     });
// }

// async function displayData(){
//     console.log('Initial');
//     const data = await fetchData();
//     console.log(data);
//     console.log('Final');
// }
// displayData();

//path module

// const path = require('path');

// const file = 'C:/Users/me/Desktop/Nodejs/basics/day5.js';
// console.log(path.basename(file));
// console.log(path.dirname(file));
// console.log(path.extname(file));


//fs module
//read filr 
const fs = require('fs');

// fs.readFile('day5.js','utf8',(err,data)=>{
//     if (err){
//         console.log('Error:',err);
//     }
//     else{
//         console.log(data);
//     }
// });

//write file

// fs.writeFile('git.txt','console.log("Hello")',(err)=>{
//     if (err){
//         console.log('Error:',err);
//     }
// });

