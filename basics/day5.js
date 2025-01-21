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
console.log('Start');
setTimeout(() => {
    console.log('Time Out Completed');
},3000);
console.log('Last');

//async/await