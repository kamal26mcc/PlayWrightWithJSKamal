// finaly keywords

// 1. finally block will execute defenectly 
// 2. try block la correct ah work ana inth block 1st execute aakum
// 3. catch block la logic work aakalana finally block 1st varum apuram catch block varum


//var x = 8;
console.log("open DB ")
try{
    console.log(x/4)
    console.log("Execute sql query")
}catch(err){
    console.log(x/4)
    // console.log(8/4) //1st finally varum appuram catch block varum 
    
}finally{
console.log("close DB")
// finally block will execute defenectly 
}