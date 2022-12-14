const dateAtime = require('../model/dateAtime.js')
const g2ValueOne = require('../model/g2Values.js')


module.exports = async(req,res)=>{   

    var userId = req.params.id;


    const data = await g2ValueOne.findOne({_id: userId}) 

    res.render('examinerReview',{  DriverData: data}) 
};