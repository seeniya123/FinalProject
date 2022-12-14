        const g2ValueOne = require('../model/g2Values.js')
        const dateAtime = require('../model/dateAtime.js')
        
        module.exports = async(req,res)=>{
            var user_id = req.session.userId
                const data = await g2ValueOne.findOne({_id: user_id})   
                
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
                if(!data){
                    const data = {firstName:'',lastName:'',licenseNumber:'',age: '',date:''};
                    const car_details = {make:'',model:'',year:'',plateNumber:''} ;
                    res.render('g2',{liData: data,carData: car_details, choosenDate:choosenDate, timeSlots : resDate,liDataerr: err})
                }
                else{
                   
                    
                    res.render('g2',{ liData: data, carData:data.car_details ,choosenDate:choosenDate, timeSlots : resDate,liDataerr: err})  
                }   
        
        }
    