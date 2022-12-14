// Routing to controller page
require('dotenv').config();
const homePageController = require('./controllers/home');
const gPageController = require('./controllers/G');
const gTwoPageController = require('./controllers/G2');
const gTwoPageStoreController = require('./controllers/G2store');
const gTwoPageUpdateController = require('./controllers/G2update');
const gTwoPageFindController = require('./controllers/G2find');
const loginPageController = require('./controllers/login');
const signupFormPageController = require('./controllers/signupForm');
const signUpPageController = require('./controllers/signup');
const loginUserPageController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');
const passwordMatchMiddleware = require('./middleware/passwordmatch');
const appointmentController = require('./controllers/appointment');
const appointmentStoreController = require('./controllers/appointmentstore');
const checkAppointmentcontroller = require('./controllers/checkAppointment');
const bookAppointmentController = require('./controllers/bookAppointment');
const examinerController = require('./controllers/examiner');
const driverAuthMiddleware = require("./middleware/DriverAuthMiddleware");
const adminAuthMiddleware = require("./middleware/adminAuthMiddleware");
const examinerAuthMiddleware = require('./middleware/examinerMiddleware');
const checkExaminerController = require('./controllers/checkExaminer');
const examinerReviewController = require('./controllers/examinerReview');
const updateExaminerReviewController = require('./controllers/updateExaminerReview');
const adminReviewController = require('./controllers/adminReview');
const driverExamResultController = require('./controllers/driverExamResult');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { title } = require('process');
// Body parser- Middleware
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const flash = require('connect-flash');
const mongoStore = require('connect-mongo');
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Session secret key implementation
const expressSession = require("express-session");
app.use(
    expressSession({
      secret: "seeni699nimis259",
      resave: false,
      saveUninitialized: true,
      store: mongoStore.create({mongoUrl: process.env.MONGO_URL})
    })
  );
app.use(flash());



global.loggIn = null;
app.use("*", (req, res, next) => {
  loggIn = req.session.userId;
  utype = req.session.userType;
  // Connect flash implemented to store user id and user type
  req.flash('user_id', loggIn);
  req.flash('user_type', utype);
  next();
});

// Database Connection
mongoose.connect(
  // "mongodb+srv://Seeniya:Davichan%401@cluster0.8ry2wie.mongodb.net/Blog?retryWrites=true&w=majority",
  process.env.MONGO_URL,
  // { user: "NTuser", pass: "Nimisha1234" },
  {
    useNewUrlparser: true

  });


// URL Routing to controllers
app.get('/',homePageController);
app.get('/G',driverAuthMiddleware,gPageController);
app.get('/G2',driverAuthMiddleware,gTwoPageController);
app.post('/G2/store',gTwoPageStoreController);
app.post('/G2/dataUpdated',gTwoPageUpdateController);
app.post('/G2/find',gTwoPageFindController);
app.get('/Login',loginPageController);
app.get('/signup',signupFormPageController);
app.post('/signup',passwordMatchMiddleware,signUpPageController);
app.post('/loginUser',loginUserPageController);
app.get('/logout',logoutController);
app.post('/appointmentSend',appointmentStoreController);
app.get('/appointment',adminAuthMiddleware,appointmentController);
app.post('/checkAppointment',checkAppointmentcontroller);
app.post('/bookAppointment',bookAppointmentController)
app.get('/examiner',examinerAuthMiddleware,examinerController)
app.post('/checkExaminer',checkExaminerController)
app.get('/examinerReview/:id',examinerAuthMiddleware,examinerReviewController)
app.post('/updateExaminerReview',updateExaminerReviewController)
app.get('/adminReview',adminAuthMiddleware,adminReviewController)
app.get('/driverExamResult',driverAuthMiddleware,driverExamResultController)

// Port listening implementation
const port =3007;        
app.listen(port,()=>{
  console.log("App listening on port" + port) });
        