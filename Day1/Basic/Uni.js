unary operator


// concatanation operator +,,
var str1="Hello";
var str2=" World"
var a =10;
var b =20;
console.log(a+b) //30
console.log(str1+str2)//Hello World
console.log(a+b+str1+str2)//30Hello World
console.log(str1+str2+a+b)//Hello World1020
console.log(str1+str2+(a+b))//Hello World30

//unary operator + , -
ticket="10";
totalticket=ticket+10; //1010
totalticket1=+ticket+10; //20
console.log(totalticket)
console.log(totalticket1)
areYouBng=true
areyouowninghouse=false
console.log(+areYouBng) //1
console.log(+areyouowninghouse) //0
console.log(typeof(+areyouowninghouse)) //number

a = 10;
console.log(-a) //-10