/*       
       
       class Car{
                start(){
                    console.log("Car start")
                }
                //Default constructor
                
          //      constructor(){
         //           console.log("we are in Car constructor");
         //       }
                    
                //parameterized constructor
                constructor(model){
                    console.log("model of the car is "+model)
                }
                    
            
            }
            new Car("BMW");
*/

class Car{
    start(){
        console.log("Car start")
    }
    //Default constructor
    /*
    constructor(){
        console.log("we are in Car constructor");
    }
        */
    //parameterized constructor
    constructor(model){
        console.log("model of the car is "+model)
    }
        
   
}
var c =new Car("BMW");
c.start();