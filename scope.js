class Mammal {
    constructor(name = "Henry") {
        this.animalName = name;
    }
    sayName() {
        setTimeout(() => {
            console.log(`My name is ${this.animalName}`)
        }, 200)
    }
}

let dog = new Mammal("Fido");
dog.sayName();