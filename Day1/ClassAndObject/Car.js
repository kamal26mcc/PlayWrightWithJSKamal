// class object 


class Car{
    model;
    price;
    wheels;
     start(){
        console.log("Car starts Kamal")
    }
    stop(){
        console.log("Car stops")
    }

}
var a =new Car();

a.model="BMW";
a.price=20000;
a.wheels=4;

console.log("model ="+a.model)
console.log("price="+a.price)
console.log("wheels="+a.wheels)

a.start()
a.stop();