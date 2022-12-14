const g2ValueOne = require('../model/g2Values.js');

                 module.exports = async(req,res)=>{
                //Flushing Car Model Data to overwrite
                var inputLi = req.body.licenseNumber;
                var uMake = req.body.make;
                var uModel = req.body.model;
                var uYear = req.body.year;
                var uPlate = req.body.plateNumber;
                await g2ValueOne.findOneAndUpdate({licenseNumber:inputLi},{ make:uMake ,model:uModel ,year:uYear , plateNumber:uPlate })
                res.redirect('/')
                    }