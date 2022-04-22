//Default parameters. 
//You can use default value if value is not passed.
//Total price = cost of food +delivery charges + taxes.

// function calculateTotalprice(costOfFood, Taxes, deliveryCharges){
//     if(!deliveryCharges){//if delevertcharges is undefined
//         deliveryCharges=10;

//     }
//     const result = costOfFood+deliveryCharges+Taxes;
//     console.log(result);
// }
// //general membership
// calculateTotalprice(400, 20, 30);//450 delivery chrge added

// //pro membership
// calculateTotalprice(400, 20);//430 add 10

// other way to do this same work use defaultparameter value

function calculateTotalprice(costOfFood, Taxes, deliveryCharges=10){
    const result = costOfFood+deliveryCharges+Taxes;
    console.log(result);
}
//general membership
calculateTotalprice(400, 20, 30);//450 uses 30 for deliveryCharge.

//pro membership
calculateTotalprice(400,20,50);//470, uses 50 as deliverycharge.
calculateTotalprice(400, 20);//430 value of deliveryCharge is not passed, with defaultparameter it takes 10 for deliverycharge.
//defaultparameter only works when value is not passed.