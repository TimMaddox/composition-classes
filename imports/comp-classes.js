
  class Walkable {

    walk() {
      console.log("Walking...");
    }
  }

  class Swimmable {

    swim() {
      console.log("Swimming...");
    }
  }

  class Flyable {

    fly() {
      console.log("Flying...");
    }
  }

  
 const behaviors = {"walkable": Walkable, "swimmable": Swimmable, "flyable": Flyable}
 
 export {behaviors};
