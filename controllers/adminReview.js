const dateAtime = require('../model/dateAtime.js')
const g2ValueOne = require('../model/g2Values.js')

module.exports = async(req,res)=>{   

    const data = await g2ValueOne.find({usertype: "Driver"}) 
    var selectData =[];
    if(data)
    {
        data.forEach(element => {
            if(element.dateAtimeId != "")
            {
                selectData.push(element); 
            }      
        });
    }


    res.render('adminReview',{  DriverData :selectData}) 
};