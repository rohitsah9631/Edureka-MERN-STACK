// Used in collections to help with multiple values.

//Using spread operators
// Converts array into individual value.

const indiancars=["tata","mahindra","maruti" ];
const uscars=[" ","Tesla","fararri","ford"];

//create another array with value from both these array.
console.log(indiancars);//array
console.log(uscars);//array
//const result = indiancars+uscars;
//console.log(result);// it print individual value but i want this value into an array.
//const result = [indiancars+uscars];[ 'tata,mahindra,maruti ,Tesla,fararri,ford' ]
const result = [...indiancars,...uscars];['tata',   'mahindra', 'maruti', ' ','Tesla',  'fararri','ford' ]
const result2 =[...result,"KIA"];
console.log(result2);