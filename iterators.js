let myArr = [1,2,3,4]

let itr = myArr.values()  //get our iterator from our array
let i = itr.next()

while(!i.done){ 
  console.log(i);  //show the value and done for the current object
  i = itr.next();  //keep calling the iterator next method
}
