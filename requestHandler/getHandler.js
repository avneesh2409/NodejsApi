
const getHandler= (req, res) => {
    var data = require('../models/index')
    if(data.length)
    {
    res.send(data)
    }
}

module.exports = getHandler