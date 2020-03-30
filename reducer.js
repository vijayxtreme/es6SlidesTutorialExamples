let reduce = (total, num) => {
    return total + num
}

let arr = []

let sum = (arr) => arr.reduce(reduce)

for(let i=0; i<=100000; i++){
    arr.push(i)
}

let x = sum(arr)
console.log(x, arr)