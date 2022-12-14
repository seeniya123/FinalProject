const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// G2 page Schema Creation
const g2ValuesSchema = new Schema({
    firstName: {type: String, default:''},
    lastName : {type: String , default:'' },
    licenseNumber : {type: String , default:''},
    age : {type: Number , default:''},
    date : {type: String , default:''},
    car_details: {
        make : {type: String , default:'' },
        model : {type: String , default:''},
        year : {type: Number , default:''},
        plateNumber: {type: String , default:'' }
    },
    username : {type: String  },
    password : {type: String  },
    usertype : {type: String  },
    dateAtimeId:{type: String , default:''},
    TestType : {type: String , default:''  }, 
    examStatus : {type: Boolean , default: false  },
    comment:{type: String , default: '' }
})

const g2Values = mongoose.model('g2Page',g2ValuesSchema)
module.exports = g2Values