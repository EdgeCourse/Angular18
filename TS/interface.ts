interface Animal {
    name: string;
    makeSound(): void;
  }
  
  class Dog implements Animal {
    constructor(public name: string) {}
  
    makeSound(): void {
      console.log('Woof!');
    }
  }
  
  const myDog: Animal = new Dog('Buddy');
  myDog.makeSound();