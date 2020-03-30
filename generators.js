function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let itr = myGenerator(); //generator function call, creates a new iterator, itr
let res = itr.next(); //we get an object with { value: 1, done: false }
console.log(res)
console.log(res.value, res.done); //1, false
// do something else


res = itr.next();
console.log(res.value, res.done); //2, false
// do something else

res = itr.next();
console.log(res.value, res.done); //3, true

res = itr.next();
console.log(res.value, res.done); //3, true