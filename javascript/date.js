//date type in javascript .

//1. How to get current date and time?
const currentDate = new Date();
console.log(currentDate);//2022-03-18T10:31:53.910Z
console.log(typeof currentDate);

//2. Date formates in javascript.
console.log(currentDate.toDateString());//Fri Mar 18 2022

//3. time formates(indian standard time) in javascript
console.log(currentDate.toTimeString());//16:01:53 GMT+0530 (India Standard Time)

//4. how to get year from date?
console.log(currentDate.getFullYear());//2022

//5. How to get month from date?
console.log(currentDate.getMonth());//2[0=jan,....,11=dec]

//6. how to get day from date?
console.log(currentDate.getDay());//[0=sun,.....,6=saturday]     

//7. how to get hour from a date?
console.log(currentDate.getHours());

//moment js library is the most useful library to work with dates?
