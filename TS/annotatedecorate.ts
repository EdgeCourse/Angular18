/* 
A simple e-commerce application. You have a Product class, and you want to:

Annotate: Indicate which product properties are required for order processing.

Decorate:
Automatically calculate the total price based on the product's price and quantity.
Log the creation of a new product instance.

*/
class Product {
    name: string;
    price: number;
    quantity: number;
  
    constructor(name: string, price: number, quantity: number) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.price * this.quantity;
    }
  }
  
  const product = new Product("T-Shirt", 19.99, 2);
  console.log(product.getTotalPrice()); // Output: 39.98

//annotation for required fields
/*
//function Required() {
    // This annotation could be used by a validation library 
    // to ensure required fields are not empty before processing an order.
 // }


 //validation library: Validation Logic: During object creation or before certain operations (like saving data), the library would iterate through the object's properties and check if any of them are marked with @Required.

  function Required() {
  return (target: any, propertyKey: string) => {
    const originalDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey);

    Object.defineProperty(target, propertyKey, {
      ...originalDescriptor, 
      set(value: any) {
        if (value === undefined || value === null || value === '') {
          throw new Error(`${propertyKey} is required.`); 
        }
        originalDescriptor.set?.call(this, value); 
      },
    });
  };
}
  
  class Product {
    @Required() 
    name: string;
  
    @Required()
    price: number;
  
    @Required()
    quantity: number;
  
    constructor(name: string, price: number, quantity: number) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.price * this.quantity;
    }
  }
  
  const product = new Product("T-Shirt", 19.99, 2);

  */

  //decorator: automatic price calculation and logging:
/*
  function CalculateTotalPrice() {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
      const originalMethod = descriptor.value;
  
      descriptor.value = function (...args: any[]) {
        // Calculate and store the total price 
        this.totalPrice = this.price * this.quantity; 
  
        // Log the creation of the product
        console.log(`New product created: ${this.name}`); 
  
        return originalMethod.apply(this, args); 
      };
      return descriptor;
    };
  }
  
  class Product {
    name: string;
    price: number;
    quantity: number;
    totalPrice: number; 
  
    constructor(name: string, price: number, quantity: number) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  //The decorator could incorporate conditional logic, for example
  //don't have to modify the function itself
  //function CalculateTotalPrice(applyDiscount: boolean) { 
  //@CalculateTotalPrice(true) 

  
  // Decorators provide a flexible way to dynamically modify the behavior of methods or properties. You can easily change the logging behavior, add caching, or implement other cross-cutting concerns without directly modifying the original method. 
  
    @CalculateTotalPrice() 
    getTotalPrice() {
      return this.price * this.quantity; // This method is now modified by the decorator
    }
  }
  
  const product = new Product("T-Shirt", 19.99, 2); 
  console.log(product.totalPrice); // Output: 39.98 
  console.log(product.getTotalPrice()); // Output: 39.98
  */
