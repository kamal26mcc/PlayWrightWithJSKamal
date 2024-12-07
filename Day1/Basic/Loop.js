
console.log("----------------------------")
var marks=56;
if(marks>=80)
    console.log("Distinction")
else if(marks>=60)
    console.log("First class")
else if(marks >=50)
    console.log("secondclass")
else 
   console.log("Fail")



console.log("------------print 1 to 10 using for whileloop----------------")
i=1;
while(i<=10){
    console.log(i)
    i++;
}



console.log("------------print 1 to 10 using for do...whileloop----------------")

j=1
do{
 console.log(j)
 j++
}while(j<=10)



console.log("------------print 1 to 10 using forLoop with --break--- ----------------")
for(var i=1;i<=10;i++){
    if(i==5){
        break; // break means stop reach 5 exp: 1234
      // continue; // countinue means skip the "5 value" exp : 1234"_"678910
    }
        console.log(i)
}



console.log("------------print 1 to 10 using forLoop with --continue--- ----------------")
for(var i=1;i<=10;i++){
    if(i==5){
       // break; // break means stop reach 5 exp: 1234
       continue; // countinue means skip the "5 value" exp : 1234"_"678910
    }
        console.log(i)
}