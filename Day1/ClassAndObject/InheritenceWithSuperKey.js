

//parent class or super class

class Car{
    model
    constructor(){
       
        console.log("Car constructor kamal kathirvel")
    }
    start(){
        console.log("Car starts")
    }
    stop(){
        console.log("Car starts")
    }
}


//child class or subclass
class BMW extends Car{
    constructor(){
        super();
        console.log("BMW constructor")
    }
    start(){
        console.log("BMW has its own of starting car")
    }
    theftsafty(){
        console.log("This is spl feature in BMW")
    }
}
var b =new BMW();

b.start();
b.stop();
b.theftsafty();
b.model="jaguar";
console.log(b.model)