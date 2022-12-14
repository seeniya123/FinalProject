const dateAtime = require('../model/dateAtime.js')
const g2ValueOne = require('../model/g2Values.js')
module.exports = async(req,res)=>{

    var date = req.body.date;
    var time = req.body.time;
    var TestType = req.body.TestType;
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
    var choosenDate = today;
    var user_id = req.session.userId
    var data  = await g2ValueOne.findOne({_id: user_id})
    var getDate = await dateAtime.findOne({date:date, time:time ,isTimeSlotAvailable:true})
    var resDate=[];
    if(getDate){
        resDate.push(getDate.time)
    }
    
    if(!time){
        const err = ["There is no available slot for selected date"]
        res.render('G2',{liData: data,carData: data.car_details, choosenDate:choosenDate, timeSlots : resDate,liDataerr : err})
    }
    else if(data.dateAtimeId != ""){
        const err = ["You have already choosen a date"]
        res.render('G2',{liData: data,carData: data.car_details, choosenDate:choosenDate, timeSlots : resDate,liDataerr : err })

    }
    else if(!data){
        const err=[""];
        const data = {firstName:'',lastName:'',licenseNumber:'',age: '',date:''};
        const car_details = {make:'',model:'',year:'',plateNumber:''};
        res.render('G2',{liData: data,carData: car_details, choosenDate:choosenDate, timeSlots : resDate,liDataerr : err })
    }
    else{
        const err = ["Slot  booked succesfully"];
        await dateAtime.findOneAndUpdate({_id: getDate._id },{isTimeSlotAvailable : false  }) 
        await g2ValueOne.findOneAndUpdate({_id: user_id},{dateAtimeId : getDate._id ,TestType : TestType })   
        res.render('G2',{ liData: data, carData:data.car_details ,choosenDate:choosenDate, timeSlots : resDate,liDataerr : err })  
    } 
       
};