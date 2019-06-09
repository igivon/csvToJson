const path  = require('path');
const csv   = require('csvtojson');
const fs    = require('fs');

const csvFilePath = path.join(__dirname,'customer-data.xls');
console.log('csv file to tranfer to json is ' + csvFilePath);
 csv().fromFile(csvFilePath).then((jsonObj)=>{
    console.log(jsonObj);
    try {
        fs.writeFileSync(path.join(__dirname,'customer-data.json'), JSON.stringify(jsonObj,null,2));
      } catch (err) {
        console.error(err);
      }
    
});
 
// Async / await usage
const jsonArray= csv().fromFile(csvFilePath);