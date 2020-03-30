let m1 = num => {
    let m2 = () => num*2
    return m2
}
let m3 = m1(2)
console.log(m3())
