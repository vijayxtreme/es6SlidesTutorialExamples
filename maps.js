//Map Example
let myMap = new Map();
let myObj = {}

myMap.set('John', 'Cheeseburger');
myMap.set('Vijay', 'Chicken Tikka Masala')
myMap.set('Danielle', 'Vegan Lasagna')
myMap.set(function doNothing(){}, 'Did nothing')
myMap.set(NaN, 'yup NaN works too')

console.log(myMap.size);

myMap.forEach((val, key) => console.log(`${key}: ${val}`))


