// date and time fuctionality



d =new Date();

console.log("-----------Date--------------");
console.log(d) // current system date
console.log("-----------Date--------------");


console.log("Year :"+d.getFullYear())
console.log("Month :"+d.getMonth())
console.log("day :"+d.getDay()) //6

switch (new Date().getDay()){
    case 0:
        day="Sunday"
        break;
    case 1: 
        day="Monday"
        break;
    case 2:
        day="Tuesday"
        break;
    case 3: 
        day="Wednesday"
        break;
    case 4: 
        day="Thursday"
        break;
    case 5:
        day="Friday"
        break;
    case 6: 
        day="Saturday"
        break;
    
}
console.log("Day Name is "+day)