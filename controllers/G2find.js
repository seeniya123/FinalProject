const g2Values = require('../model/g2Values.js');
module.exports = async(req,res)=>{
    var inputLi = req.body.licenseInfoNumber;
    const liNum = await g2Values.find({licenseNumber:inputLi})


    if(liNum.length==0){

        const err = [{err:" NO USER FOUND" }];

        res.render('G',{ 
            liData: err })

    }
    else{
        res.render('G',{
            liData: liNum // assigning data to blogposts variable
            })

    }
    }