


//Difference between var and let
var y=200;
function somefun(){
    if(true){
       // var localvar=100
        let localvar=100
        console.log(localvar)
    }
    //console.log(localvar)
    console.log(y)
}
somefun();
// console.log(localvar)  ithu call panna error through pannum bcoz let within block la mattum than value kotukum
console.log(y)

// var within file kulla yum method ku velia and fuction ku ullayum value access pannalam
//whenever you define any variable as 
//var scope of that variable is
//limited to module level



//whenever you define any variable as let
//scope of that variable is limited to block level
/* within block only let
if(true){
    // var localvar=100
     let localvar=100
     console.log(localvar)
ithuku ulla mattum than let use panna mutiyum

 } */