const dateAtime = require('../model/dateAtime.js')
const g2ValueOne = require('../model/g2Values.js')

module.exports = async(req,res)=>{   

    var TestType = req.body.TestType;

    const data = await g2ValueOne.find({usertype: "Driver"}) 
    var selectData =[];
    if(data)
    {
        data.forEach(element => {
            if(element.dateAtimeId != "")
            {
                if(element.TestType == TestType){
                    selectData.push(element); 
                }
                else if(TestType == "all"){
                    selectData.push(element); 
                }
                
            }      
        });
    }


    res.render('examiner',{ DriverData :selectData, TestType:TestType}) 
};