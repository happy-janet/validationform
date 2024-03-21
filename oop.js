let car = {
    color: "blue",
    model: "Toyota",
    start: function() {
      console.log("The car is starting...");
    },
    stop: function() {
      console.log("The car is stopping...");
    },
    honk: function() {
      console.log("Beep beep!");
    }
  };
// oop using class
  class Car {
    constructor(color, model) {
      this.color = color;
      this.model = model;
    }
  
    start() {
      console.log("The car is starting...");
    }
  
    stop() {
      console.log("The car is stopping...");
    }
  
    honk() {
      console.log("Beep beep!");
    }
  }
  
  // Creating an instance of the Car class
  let myCar = new Car("blue", "Toyota");

//   explaining inheritance
  class Vehicle {
    constructor(color) {
      this.color = color;
    }
  
    start() {
      console.log("The vehicle is starting...");
    }
  
    stop() {
      console.log("The vehicle is stopping...");
    }
  }
  
  class Car extends Vehicle {
    constructor(color, model) {
      super(color);
      this.model = model;
    }

    honk() {
      console.log("Beep beep!");
    }
  }
  
  let myCar = new Car("blue", "Toyota");

//   explains polymorphism
  class Car {
    start() {
      console.log("Starting a car...");
    }
  }
  
  class Bike {
    start() {
      console.log("Starting a bike...");
    }
  }
  
  // Using polymorphism
  function startVehicle(vehicle) {
    vehicle.start();
  }
  
  let myCar = new Car();
  let myBike = new Bike();
  
  startVehicle(myCar); // Output: Starting a car...
  startVehicle(myBike); // Output: Starting a bike...