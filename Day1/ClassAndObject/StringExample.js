// string consept 


var str="Pune is too hot today";
console.log(str.length)
console.log(str.charAt(1))
console.log(str.indexOf('o'))
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log("--------------------")
console.log(str=="pune is too hot today")//true
console.log(str=="pune is too hot today") //false
console.log(str.toLowerCase()=="pune is too hot today".toLowerCase()) //true
console.log(str.replace("Pune","Bangalore"))
console.log(str)
console.log(str.trim())
console.log(str.replace(" ",""))
console.log(str.replaceAll(" ",""))
console.log("--------------------")
console.log(str.length-str.replaceAll(" ","").length)


// string split example

console.log("----------split--------------")
var array1=str.split(" ");
array1.forEach(a=>console.log(a))

var newString=array1.join(":")
console.log(newString)