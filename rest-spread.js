let sum = (total, ...numbers) => {
    numbers.forEach(num => total += num)
    console.log(total);
}
  
sum(1,2,3,4,5,6,7);
sum(1,2,3,4,5,6);
sum(1,2,3);

// let sum = (a,b,c) => {
//     console.log(a + b + c)
// }
// sum(...[1,2,3]) //spread operator 