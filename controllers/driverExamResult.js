const dateAtime = require('../model/dateAtime.js')
const g2ValueOne = require('../model/g2Values.js')


module.exports = async(req,res)=>{   

    var user_id = req.session.userId
    const data = await g2ValueOne.findOne({_id: user_id}) 
    
    res.render('driverExamResult',{ DriverData: data}) 
};