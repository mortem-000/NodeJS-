// let x= 100;
// console.log('x:', x);
// let x= 200;
// console.log('x:', x);
// we cannot redeclare the variable in the same scope but using VAR we can redeclare the variable.

// const x= 100;
// console.log('x:', x);
// x= 200;
// console.log('x:', x);
//TypeError: Assignment to constant variable.

//C : int,float,double,string,boolean
//JS : number,boolean,string,arrays,objects

// let x = 100;
// console.log(typeof x); //number


// let x = true;
// console.log(typeof x); //boolean

// let z = 'Hello';
// console.log(typeof z); //string

// let y = {name: 'John', age: 40};
// console.log(typeof y); //object
// console.log(y.name,y.age); //John 40

// let x= ['10','20','30'];
// console.log(typeof x); //object
// console.log(x[1]); //20

//operators
//1. Arithematic operators
// +,-,*,/,%,**,Math.pow(),Math.round(),++,--,+=,-=,*=,/=,%=,==,===,!=,!==,>,<,>=,<=,&&,||,!

//2. Assignment operators
// =,+=,-=,*=,/=,%=,**=,Math.pow(),=,

//3. Comparison operators
// ==,===,!=,!==,>,<,>=,<=

//4. Logical operators
// &&,||,!

// console.log(true && true); //true
// console.log(true && false); //false
// console.log(true || false); //true
// console.log(!true); //false
// console.log(!false); //true


//5. Bitwise operators
// & ,|,^,~,<<,>>,>>>

//6. Conditional operators
// ?:

//7. typeof operator
// typeof



// const firstfunc = () =>{
//     console.log('First function');
    
//     const secondfunc =() =>{
//         console.log('Second function');
//     }
//     return secondfunc;
// }

// const closure = firstfunc();
// console.log('closure:',closure);
// closure();


// const incrementdecrement = () =>{
//     let count = 0;
//     return {
//         increment: () =>{
//             count++;
//         },
//         decrement: () =>{
//             count--;
//         },
//         getCount: () =>{
//             return count;
//         }
//     }
// }

// const counter = incrementdecrement();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());


// const sum=(x,y,callback) =>{
//     let temp = x+y;
//     callback(temp);
// }

// let add = sum (10,20,(s)=>{
//     console.log('Sum:',s);
// });

// const fetchdata = (callback) =>{
//     let data = 'Data from server';

//     if (false){
//         callback('Error occured',null);}
//     else{
//         callback(null,data);
//     }
// }

// fetchdata((err,data)=>{
//     if (err){
//         console.log('Error:',err);
//     }
//     else{
//         console.log('Data:',data);
//     }
// });


//promise
//pending,resolved,rejected

const newpromise = new Promise((resolve,reject)=>{
    let data = 'data from server';
    console.log('resolve:',resolve);
    console.log('reject:',reject);
    if (data){
        resolve(data);
    }
    else{
        reject('Error occured');
    }
});

newpromise
.then((data)=>{
    console.log('Data:',data);
})
.catch((err)=>{
    console.log('Error:',err);
})
.finally(()=>{
    console.log('promise done');
});