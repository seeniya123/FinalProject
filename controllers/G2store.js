const g2ValueOne = require('../model/g2Values.js');
const bcrypt = require("bcrypt");
          module.exports = async(req,res)=>{
            // res.sendFile(path.resolve(__dirname,'pages/G2.html'))
           // create helps us to send values to DB
           
           var firstName = req.body.firstName;
           var lastName = req.body.lastName;
           var licenseNumber = String(req.body.licenseNumber);
           licenseNumber = await bcrypt.hash(licenseNumber,10);
           var age = req.body.age;
           var date = req.body.date;

           var make = req.body.make;
           var model = req.body.model;
           var year = req.body.year;
           var plateNumber = req.body.plateNumber;

           var car_details ={make : make,model : model,year: year,plateNumber: plateNumber};

          //  const userdata= await g2ValueOne.findOne({_id : req.session.userId})
           const user = req.session.userId;
           await g2ValueOne.findOneAndUpdate({_id:user},{firstName:  firstName,lastName: lastName,licenseNumber: licenseNumber,age: age, date: date,car_details})
          
     
                // await g2ValueOne.create(data)
                res.redirect('/')
            }
            