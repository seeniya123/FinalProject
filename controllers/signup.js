const g2ValueOne = require('../model/g2Values.js');
const bcrypt = require("bcrypt");
          module.exports = async(req,res)=>{
            // res.sendFile(path.resolve(__dirname,'pages/G2.html'))
           // create helps us to send values to DB
           
           var username = req.body.username;
           var password = req.body.password;
           password = await bcrypt.hash(password,10);
           var usertype =req.body.usertype;
           var liNum = await g2ValueOne.findOne({username:username})

           if(!username){
            const err = [" USERNAME SHOULDN'T BE A NULL VALUE "];    
            res.render('login',{ 
                liData: err })
          }else{

            if(liNum){
              const err = [" USERNAME ALREADY EXISTS "];    
              res.render('login',{ 
                  liData: err })
            }
            else{
              
             var data = {username,password,usertype};
             await g2ValueOne.create(data)
             res.redirect('Login')
  
            }
          }

         
            };
            
