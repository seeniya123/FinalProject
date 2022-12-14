        const dateAtimeOne = require('../model/dateAtime.js');

        module.exports = async(req,res)=>{
        var date = req.body.date;
        var time = req.body.time;
        var data = {date,time};
        var today = new Date();
        var dd = today.getDate() + 1;
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        var dateSelected = today;

        console.log(dateSelected);

        const alreadyHasDate = await dateAtimeOne.findOne({date:date,time:time})

        if(alreadyHasDate){
                const err = [" Time  slot not available"];    
                res.render('appointment',{dateSelected:dateSelected,liData: err})


        }else{

                await dateAtimeOne.create(data)
                const err = [" Time  slot Booked Sucessfully"];  
                res.render('appointment',{dateSelected:dateSelected,liData:err})
        }
   
       
}
