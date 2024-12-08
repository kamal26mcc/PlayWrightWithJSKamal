const object=require('./TestData.json')

console.log(object.cName)
console.log(object.totalemp)
console.log(object.credential)
console.log("eName="+object.credential.ename)
console.log("pwd="+object.credential.pwd)
object.Branches.forEach(a=>console.log(a.location+" and its are is "+a.area+"PhoneNumber"+a.phone))