class Animal {
    constructor(name="", species=""){
      this.name = name
      this.species = species
    } 
}
  
  class Dog extends Animal {
    constructor(name, species){
      super(name,species)
    }
   
    bark(){
      console.log(`${this.name}, a ${this.species} says woof woof`)
    }
  }

  class Blob extends Animal {
      constructor(name, species){
          super(name, species)
      }
      speak(){
          console.log(`${this.name} says Blob`)
      }
  }
  
  const fido = new Dog("Fido", "Dog")
  fido.bark()

  const blob = new Blob("Blob", "Blobby")
  blob.speak()