// Equality Operators in js

//==(check values),===(strictly Euality operator)

// ==[check for equality of values]
//===[check for euality of values and equality of dataType]

let x=null; //empty
let y; // empty

console.log(x==y);//true because value x and y are same
console.log(x===y);//false. object!=undefined

let num1 = 10; //number
let num2 ="10"; //string

console.log(num1==num2); //true 10 is equal to "10"
console.log(num1===num2);// false number!=string
