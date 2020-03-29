/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
const user = {
    firstName: "Hodan",
    lastName: "Abdullahi",
    age: 29
};
console.log(user)

/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */

 const allTypes = {
     middleName: "haleema",
     place: 28,
     array: ["a", "b", "c"],
     objectA: {

     },
     function: function name(params) {
         
     },
     boolean: true
     
 }

 console.log(allTypes)
/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

 function createMovieObject(name, rating, ticketPrice) {
  const movie =  {
      name: name,
      rating: rating,
      ticketPrice: ticketPrice
  };
  return movie;
 }


createMovieObject("Venom", 4, 20);
console.log(createMovieObject)
