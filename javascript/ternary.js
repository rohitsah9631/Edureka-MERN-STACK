// Ternary operator. ? , :
//<conditionalExpression> ? <returnIfMatched> : <returnIfNotMatched>

// function isEven(val){
//     if(val%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }

// function <nameOfFunction> (<parameter>){}
function isEven(val){
    //body of function
    const result = val%2==0 ? true : false;
    return result;
}
console.log(isEven(100));//true
console.log(isEven(101));//false

// function - block of code to do something.block
// 1. function is a keyword to define a function.
// 2. function takes parameters to operate on.
// 3. function can return result or nothing.
