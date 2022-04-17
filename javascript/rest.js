// rest and Spread Operater(...)
//Introduce in ES6

//used in collection to helo with multiple values.

//Using rest operator
//Convert individual values into an array.

function sum(...numbers){
    let result=0;
    for(let i=0; i<numbers.length; i++){
        // result = 0+2 = 2; // 1st
        // result = 2+3 = 5; // 2nd
        // result = 5+4 = 9; // 3rd
        // result = 9+5 = 14; // 4th
        // result = 14+6 = 20; // 5th
        //result = 20+8 = 28; //6th
        result=result+numbers[i];
    }
    console.log(result);
}

sum(2, 3); // 5
sum(2, 3, 4); // 9
sum(2, 3, 4, 5); // 14
sum(2, 3, 4, 5, 6); // 20
sum(2, 3, 4, 5, 6,8); // 28