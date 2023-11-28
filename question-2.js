class Circle {
   
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getArea(){
      return Math.PI * this.radius ** 2;
    }
  
    getCircumference(){
      return 2 * Math.PI * this.radius;
    }
  
    toString(){
      return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
  }
  
  
  var circle1 = new Circle();
  var circle2 = new Circle(2.5);
  var circle3 = new Circle(3.0, "blue");
  
  console.log(circle1.toString());
  console.log(circle2.toString());
  console.log(circle3.toString());
  
  console.log("Area of circle3:", circle3.getArea());
  console.log("Circumference of circle3:", circle3.getCircumference());
  