const dateAtime = require('../model/dateAtime.js')
const g2ValueOne = require('../model/g2Values.js')


module.exports = async(req,res)=>{   

    var status = req.body.status;
    var comment = req.body.comment;
    var userId = req.body.userId;
    var updateStatus;

    if(status == "pass"){
        updateStatus = true;
    }
    else{
        updateStatus = false;
    }

    await g2ValueOne.findOneAndUpdate({_id:userId},{examStatus : updateStatus, comment : comment})



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


    res.render('examiner',{ DriverData :selectData, TestType:"all"}) 
};