// multiple array explain


var credentials = [
    ["Name1", "pwd1"],
    ["Name2", "pwd2"],
    ["Name3", "pwd3"],
    ["Name4", "pwd4"]
]

console.log("row count =" + credentials.length)

console.log("col count =" + credentials[2].length)

//console.log(credentials[2][1])

for (let i = 0; i < credentials.length; i++) {

    for (let j = 0; j < credentials[0].length; j++) {

        console.log(credentials[i][j])
    }
}