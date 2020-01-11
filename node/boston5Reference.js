
// In node everything is a reference

let bucky = {
    favFood: "Bacon",
    favMovie: "Chapie"
};

var person = bucky;

person.favFood = "Mutton";

console.log(person);// { favFood: 'Mutton', favMovie: 'Chapie' }
console.log(bucky);// { favFood: 'Mutton', favMovie: 'Chapie' }
//