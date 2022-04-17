//Differenece b/w var and let
//Function in js
//function <nameofFunction>(<params>)

// function definition
function testDecleration(){
    //let -scope entire function.
    if(true){
        var x=10;
        let y=20;// scope -inside if block.
        console.log("Inside if block")
        console.log(x);//10
        console.log(y);//20
    }
    console.log("outside if block")
    console.log(x);//10
    console.log(y);// y is not defined

}

// declearing using var has function level scope.
// but declaring using let has block level scope.

//Execute a function
testDecleration();
 

