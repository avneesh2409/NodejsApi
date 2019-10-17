const fs = require('fs')
const csv = require('csv-parser')

const getHandler= (req, res) => {
    var data = []
    fs.createReadStream('public/out.csv')
    .pipe(csv())
    .on('data', (row) => {
        data.push(row)
      
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
     
      res.json(data)
    });
 
   
 
}

module.exports = getHandler