
const getHandler= (req, res) => {
    var data = require('../models/index')
  
   
    res.send(data)
 
}

module.exports = getHandler