// polymorphisam not support in JS

/*

polymorphism -( javascript dont support polymorphism)

OpenMobile- default
OpenMobile - pattern
OpenMobie - pattern, password
OpenMobile - faceRecg
OpenMobile- pattern, password, faceRecg

Note: javascript does not support method overloading it always override.

*/


class Mobile{
    openMobile(){
        console.log("open mobile with default setting")
    }
    openMobile( password){
        console.log("open Mobile with password "+password)
    }
    openMobile( pattern){
        console.log("open Mobile with pattern "+pattern)
    }
}
var m=new Mobile();
m.openMobile("12345");