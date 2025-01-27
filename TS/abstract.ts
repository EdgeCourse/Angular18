abstract class Shape {
    abstract getArea(): number; 
  }
  
  class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.getArea());