const g2ValueOne = require('../model/g2Values.js');
const flash = require('connect-flash');

const bcrypt = require("bcrypt");
          module.exports = async(req,res)=>{
            // res.sendFile(path.resolve(__dirname,'pages/G2.html'))
           // create helps us to send values to DB
           
           var username = req.body.username;
           var password = req.body.password;
           var usertype =req.body.usertype;
           var liNum = await g2ValueOne.findOne({username:username})
           if(liNum)
            {   
                if(liNum.username==username){
                    bcrypt.compare(password,liNum.password, (error,same) =>{
                        if(liNum.username == username && same){
                            req.session.userId = liNum._id;
                            req.session.userType = liNum.usertype;
                            res.redirect('/')
                        }else{
                                const err = [" PLEASE ENTER A CORRECT USERNAME AND PASSWORD "];    
                                res.render('login',{ 
                                    liData: err })
                        }
                    })
                }else{
                    const err = [" PLEASE ENTER A CORRECT USERNAME AND PASSWORD "];    
                            res.render('login',{ 
                                liData: err })

                }
               }
           else{
            const err = [" PLEASE SIGN UP FIRST "];  
            res.render('login',{ 
                liData: err })
            }
       
            }
            
