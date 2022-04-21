// tamplate Literal in js

//Allows you to embaded js variable in string.
// provides in ES6

const name = "Rohit";
const role = "student";
const location ="indai";
const exp = "0-2 year"

//my name is rohit and i am a student. and i saty in india and i have 0-2 years of exprience.
const sentence= "my name is "+name+" and i am a "+role+" and i stay in "+location+" and i have "+exp+" of exprience."
console.log(sentence);

//do with the help of tamplate literal in js.
const sentenceUsingTemplateLiteral=
`my name is ${name} and i am a ${role}. and i stay in ${location} and i have ${exp} of expriences.`;
console.log(sentenceUsingTemplateLiteral);