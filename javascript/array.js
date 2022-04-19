// Array => Collection of multiple values.
// Array stores data based on indexes.
// Indexes starts at 0.

//1. Creating the array 0  1  2  3  4  5
const arrayofNumbers = [10,20,30,40,50,60];

//2.How to access one value from array
console.log(arrayofNumbers[1]);
console.log(arrayofNumbers[3]); 

//3. to add two value in array
console.log(arrayofNumbers[1]+arrayofNumbers[3]);

//4. How to add a value in array.
arrayofNumbers.push(35);
console.log(arrayofNumbers);

//5.How to remove a value in array.
arrayofNumbers.pop();//remove last array
console.log(arrayofNumbers);

//6. How to insert an  element in array at anywhere using index.
//10, 20, 30, 40, 50, 60
arrayofNumbers.splice(2,0,25);
//10, 20, 25, 30, 40, 50, 60
//arrayofNumbers.splice(2,0,25,26,27,28);
//10, 20, 25, 26,27,28, 30, 40, 50, 60
console.log(arrayofNumbers);

//7. how to delete an element using index.
// 10, 20, 25, 30, 40, 50, 60
arrayofNumbers.splice(2,3);
// 10, 20, 50, 60
console.log(arrayofNumbers);

//8. How to get size of array.
console.log(arrayofNumbers.length);

//9. Add multiple value at multiple location.
arrayofNumbers.splice(1,0,11);
arrayofNumbers.splice(3,0,22);
arrayofNumbers.splice(4,0,44);
console.log(arrayofNumbers);


