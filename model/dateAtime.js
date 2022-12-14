const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// Slot model Schema creation
const dateAtimeSchema = new Schema({
    date: {type: String},
    time : {type: String},
    isTimeSlotAvailable : {type:Boolean , default : true}
})

const dateAtime = mongoose.model('g2Appointment',dateAtimeSchema)
module.exports = dateAtime