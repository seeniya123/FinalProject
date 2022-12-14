
const g2ValueOne = require('../model/g2Values.js')

// Custom middleware to rerouting to user_type's page

module.exports = (req, res, next) => {
  g2ValueOne.findById(req.session.userId, (error, user) => {
    if (error || !user) return res.redirect("/login");
   
    else if(user.usertype != 'Examiner'){
      if(user.usertype == 'Driver')
        {
          return res.redirect("/");
        }
        else{

          return res.redirect("Appointment");
        }
    }
    next();
  });
};
