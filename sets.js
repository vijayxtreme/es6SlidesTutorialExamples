let mySet = new Set();

//use the add method to add new values to our set
mySet.add(1)
mySet.add(2)
mySet.add((24/12))
mySet.add("iPhone")

// console.log(mySet)

//use the delete method to remove values from our set
mySet.delete(1)

console.log(mySet.has(2)) //true
mySet.forEach(val => console.log(val))
//2
//iPhone
console.log(mySet.size) //2

