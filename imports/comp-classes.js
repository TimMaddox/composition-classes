
  class Walkable {

    walk() {
      document.write("Walking...<br>");
    }
  }

  class Swimmable {

    swim() {
      document.write("Swimming...<br>");
    }
  }

  class Flyable {

    fly() {
      document.write("Flying...<br>");
    }
  }

  
 const behaviors = {"walkable": new Walkable(), "swimmable": new Swimmable(), "flyable": new Flyable()}
 
 export {behaviors};