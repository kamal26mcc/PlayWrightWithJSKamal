// thisKey notes

//this keyword always ref to the current object


class Car {
    // model;
    // price;
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

var c = new Car("BMW", 20000)
console.log(c.model)
console.log(c.price)



var d = new Car("Skoda", 20000)
console.log(d.model)
console.log(d.price)
new Car("maruti", 20000)
//this keyword always ref to the current object