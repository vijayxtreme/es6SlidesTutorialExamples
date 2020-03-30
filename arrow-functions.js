let greetName = name => `hello ${name}`

console.log(greetName("Vijay"))

let sum = (x,y) => x + y
console.log(sum(1,2))

let changeName = name => {
    name = name * 2
    return name
}

let changeName2 = name => (
    <li>Address 1</li>
    <li>Address 2</li>
)

console.log(changeName('vijay'))
console.log(changeName2('vijay'))