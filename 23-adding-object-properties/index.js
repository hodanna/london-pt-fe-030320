// **** DO NOT TOUCH THIS CODE ****
// ============================
const user = {};
// ============================


/**
 * Exercise 1 
 * 
 * add property "firstName" to "user" and assign any name 
 */




user.firstName = "Hodan";

/**
 * Exercise 2
 * 
 * add property "lastName" to "user" and assign any last name 
 */

 user.lastName = "Abdullahi"
 
 /**
 * Exercise 3
 * create a function "addANewProperty" which takes
 * 2 params, first - property name and second - property value
 * and set a new property for 'user' object
 */



 function addANewProperty() {
     Object.defineProperty(user, "age", {
     value: 25
   

     }); 

return user.age

    }
