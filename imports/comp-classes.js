
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

  
 const behaviors = {"walkable": new Walkable(), "swimmable": new Swimmable(), "flyable": new Flyable()}
 
 export {behaviors};
