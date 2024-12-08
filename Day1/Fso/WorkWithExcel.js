// excel sheet date fetch

const xls=require('exceljs')
async function workwithexcel(){
    var workbook=new xls.Workbook();
    await workbook.xlsx.readFile("C:\\Users\\HP\\Documents\\MyLearningAutomation\\JS practice kamal\\PlayWrightWithJSKamal\\Day1\\Fso\\TestData.xlsx")
    sheet=workbook.getWorksheet("Sheet1");
    var rowcount=sheet.rowCount;
    var colcount =sheet.columnCount;
    console.log("row count ="+rowcount)
    console.log("col count ="+colcount)
    /*
    sheet.eachRow(row=>{
       row.eachCell(cell=>{
        console.log(cell.value)
       })
    })
       */
    

    for(var i=1;i<=rowcount;i++){
        for(var j=1;j<=colcount;j++){
            console.log(await sheet.getCell(i,j).value)
        }
    }
}
workwithexcel();


   // sheet.getCell(6,1).value="Kamal Kathirvel"
  //  await workbook.xlsx.writeFile("C:\Users\HP\Documents\MyLearningAutomation\JS practice kamal\PlayWrightWithJSKamal\Day1\Fso");
  //  console.log("Done")