// import the file 
// Export the mCar file  to eCar



class Car {
    model;
    price;
    wheels;

            start() {
                console.log("Car starts1 its come from mCar")
            }
            stop() {
                console.log("Car stops1 its come from mCar")
            }
}
        function login() {
            console.log("Named function kamal ")
        }

var model;

module.exports = Car; // class export to ecar
module.exports.login = login(); // method call 
module.exports.model = model; // particular data called 