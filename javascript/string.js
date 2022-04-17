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
console.log(password.endsWith("33"));

//6. how do i checak if strings ends with some character.
console.log(password.endsWith("cq"));

let empname="dadvdid";
console.log(empname.indexOf("c", 2));
console.log(empname.replace("dvd", "v"));//david