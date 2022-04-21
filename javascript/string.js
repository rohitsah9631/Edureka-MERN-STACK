// string- combination of alpha&numeric&specialchars
//special chars- @#$

let password= "cqw@trcf233";

console.log(typeof password);

//1 . How to make all character in lowercase.
console.log(password.toLowerCase());

//2 . How to make all character in uppercase.
console.log(password.toUpperCase());

//3 .how do i check if strings contains some characters.
console.log(password.includes("23"));

// 4. how do i find index of character in string.
console.log(password.indexOf("@"));

//5. how do i checak if strings ends with some character.
console.log(password.endsWith("33"));//true

//6. how do i checak if strings ends with some character.
console.log(password.endsWith("cq"));//false

//7. how do i checak if strings start with some character.
console.log(password.startsWith("cq"));//true

let empname="dadvdid";
console.log(empname.indexOf("d", 3));//4 
console.log(empname.replace("dvd", "v"));//david