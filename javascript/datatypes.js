// Data types.
//c - int,float, double, short, char
// java - string. long, Date, decimal







// dta Types in JS
//1. numbar
//2. string
//3. object
//4. function
//5. undefined

let x; //value is not defined.
console.log(typeof x); // undefined

//operator to find datatype of an identifier
x=10;
console.log(typeof x);//number

x="name";
console.log(typeof x);// string

x={id: 1, name: "rohit", dept:'finance'}
console.log(typeof x);//object

x=function print(){
    console.log("this is a function");
}
console.log(typeof x);

x= new Date(); // creating instance of Date type
console.log(x);
console.log(typeof x);

// operator to find out instances of object.
console.log(x instanceof Date);//True

x=null; // define with no data.
console.log(typeof x); //object




