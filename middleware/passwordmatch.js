module.exports = async(req,res,next) => {
    var password = req.body.password;
    var conpassword = req.body.onepassword;

// Password Comparison
    if(password !=conpassword){

        const err = [" PASSWORD DOESNT MATCH "];    
        res.render('login',{ 
            liData: err })
    }
    next();
}