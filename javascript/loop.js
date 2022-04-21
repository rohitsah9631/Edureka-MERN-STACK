//Loops 
// 1. Do something in loop.
// 2. Repeat similar operation.
   // steps:
      //1. initialization => where loops begins
      //2. condition => How long loops runs.
      //3. Increment or Decrement
//1 .While loop
// print number from 1 to 10.
let i=1;
while(i<=10){
   console.log(i);
   i=i+1;
}

//2. For loop
//Reverse string
// my name is rohit.
const str = "my name is Rohit";
console.log(str.length);//16
const index = str.length-1;//15
let reversedString="";
for(let i=index; i>=0; i--){
   reversedString=reversedString.concat(str[i]);

} 
console.log(reversedString);

