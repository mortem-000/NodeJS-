//calculator function take two no from user and operator as argument and return the result.(using switch case)

function calculator(a,b,operator){
    switch(operator){
        case '+':
            console.log('Addition:',a+b);
            break;
        case '-':
            console.log('Subtraction',a-b);
            break;
        case '*':
            console.log('Multiplication:',a*b);
            break;
        case '/':
            console.log('Division:',a/b);
            break;
        default:
            return 'Invalid operator';
    }
}
let a= 10;
let b= 20;
let operator= '+';
calculator(a,b,operator);
