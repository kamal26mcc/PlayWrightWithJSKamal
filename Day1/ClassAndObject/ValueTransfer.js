// value transfer to another value



class Car{
    model;
}
var a =new Car();
var b =new Car();
var c =new Car();

console.log("---------------------")

a.model="BMW";
b.model="Skoda";
c.model="Maruti";

console.log("---------------------")

console.log(a.model)
console.log(b.model)
console.log(c.model)

console.log("-------- value interchange -------------")

a = b; // a = Skoda
b = c; // b = Maruti
c = a; // now a value is = skoda so  C value is = Skoda

console.log(a.model)
console.log(b.model)
console.log(c.model)