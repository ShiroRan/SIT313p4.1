const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is not valid!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if (!validator.isLength(value,{min:8}) ){
                throw new Error('Password is not valid! please enter Minimum 8')
            }
        }
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String
    },
    phoneNumber: {
        type: String
    }
})
module.exports  =  mongoose.model("User", userSchema)
