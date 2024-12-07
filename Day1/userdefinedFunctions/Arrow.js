// create arrow function to greet

/* notes about arrow below 

3 types of user defined functions
----------------------------------
1. Named function
2. Arrow Function (Lamda Expression)
3. Anonymous function

Arrow Function: is a function without function keyword, without name and without return keyword

Ex1:
function greet(){
  console.log("Hello world");
}
==
 ()=>{
  console.log("Hello world");
}
==
 ()=>console.log("Hello world");

Ex2: 
function add2(a,b){
 console.log("sum="+(a+b));
}
==

 (a,b)=>{
 console.log("sum="+(a+b));
}
 ==
 (a,b)=>console.log("sum="+(a+b));



Ex3: 

function lenstr(str){
 return str.length();
}
==
  (str)=>str.length();
==
 str=>str.length();

Ex4: 
function sqrnum(a){
  return a*a;
}
==
 a=>a*a;

Ex5:
   function print(){
        var i=1;
        while(i<=10){
         console.log(i);
          i++;
        }
 }
==

  ()=>{
        var i=1;
        while(i<=10){
         console.log(i);
          i++;
        }
 }
Ex6:
 function cubeNum(num){
          return num**3;
   }

==
 num=>num**3;
  
Ex7: create a arrow function for multiply 3 numbers and return the value.

function mul3(a,b,c){
       return a*b*c;
}
==
 (a,b,c)=>a*b*c;


Ex8:

str=>str.charAt(2); */



greet = ()=>console.log("Hello");
greet();
greet1=(cName)=>console.log("Hello "+cName)
greet1("Srinivas")
greet1("Jagadish")
greet1("Ajinkya")
console.log("-------------square a num-------------")
var sqr =a=>a*a;
console.log(sqr(5))
console.log("-------------Add two num-------------")
var add2 =a=>console.log(a+a);
console.log(add2(5))
console.log("-------------print 1 to 10-------------")
var print =()=>{
    var i=1;
    while(i<=10){
        console.log(i)
        i++
    }
}
print();