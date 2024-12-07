

// single array

/*
var ar =new Array(4);
ar[0]="B";
ar[1]="C";
ar[2]=true;
ar[3]=24;
*/
var ar=["B","C",true,24]

console.log("size="+ar.length)
//console.log(ar[2])

console.log("---------ForLoop-----------")
for(let i=0;i<ar.length;i++){
    console.log(ar[i])
}

console.log("---------in operator-----------")
for(var p in ar){
    console.log(ar[p])
}

console.log("---------forEachLoop-----------")
ar.forEach(num=>console.log(num))