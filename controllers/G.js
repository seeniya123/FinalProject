    const g2Values = require('../model/g2Values.js');
    const dateAtime = require('../model/dateAtime.js')
    module.exports = async(req,res)=>{
       //   declaring all null at first cause of reference error
    // var liNum =  [{  firstName: "",
    // lastName: "",
    // licenseNumber : "",
    // age: "",
    // date: "",
    // car_details:{
    // make: "",
    // model : "",
    // year : "",
    // plateNumber : " "
    // }}]
   // var inputLi = req.body.licenseInfoNumber;
   const user = req.session.userId;
   liNum = await g2Values.findOne({_id: user})
   

   const err=[""];
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
   var getDate = await dateAtime.find({date:choosenDate,isTimeSlotAvailable:true})
   var resDate=[];

   getDate.forEach(element => {
       resDate.push(element.time)
   });  
   
if(liNum)
{
    const  carData = liNum.car_details;
    res.render('G',{liData:liNum , carData : carData,choosenDate:choosenDate, timeSlots : resDate,liDataerr: err})
 }
    
    else{
        const data = {firstName:'',lastName:'',licenseNumber:'',age: '',date:''};
        const car_details = {make:'',model:'',year:'',plateNumber:''} ;
         res.render('g2',{liData: data,carData: car_details, choosenDate:choosenDate, timeSlots : resDate,liDataerr: err})
    }
}