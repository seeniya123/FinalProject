const dateAtime = require('../model/dateAtime.js')
const g2ValueOne = require('../model/g2Values.js')
module.exports = async(req,res)=>{

    var user_id = req.session.userId
    const data = await g2ValueOne.findOne({_id: user_id})  
      

        var date = req.body.date; 
        var choosenDate = date;
        const getDate = await dateAtime.find({date:date,isTimeSlotAvailable:true})
        var resDate=[];
        getDate.forEach(element => {
            resDate.push(element.time)
        });

        if(!data){
            const err =["No data found!"];
            const data = {firstName:'',lastName:'',licenseNumber:'',age: '',date:''};
            const car_details = {make:'',model:'',year:'',plateNumber:''};
            
            res.render('G2',{liData: data,carData: car_details, choosenDate:choosenDate, timeSlots : resDate,liDataerr: err })
        }
        else{
            const err =[""];
            res.render('G2',{ liData: data, carData:data.car_details ,choosenDate:choosenDate, timeSlots : resDate,liDataerr: err })  
        }
     
};