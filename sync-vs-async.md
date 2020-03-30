#Synchronous vs Asynchronous Programming

var num = 10
num = 10 +1

for(let i=0; i<100000000; i++){
    console.log(i)
}

alert('hello world')

##Synchronous Work Flow
- Step by step
- Have to wait for task to finish before going to next task
- DMV
- Post Office

##Asynchronous Work Flow
- Can multi-task
- When something finishes you get a notification, like your laundry
- Can run in parallel


let coffeeShop = order => {
    let makeYourOrder = () => {
        setTimeout(() => {
            console.log(`${order} order ready!`)
        },1000)
    }
    return makeYourOrder
}

let myOrder = coffeeShop("Vanilla Latte")
myOrder()
console.log(`Reading newspaper`)