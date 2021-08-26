const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const validator = require("validator")
const https = require("https")
const User = require("./models/User");

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/register.html")
})
mongoose.connect("mongodb+srv://admin-Cecilia:Cr020199@cluster0.nazzt.mongodb.net/userDB?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true})

app.post('/', (req,res)=>{

    if (req.body.password!=req.body.cpassword) {
        res.json( "Please enter the correct password")
    }
    else{
        const country=req.body.country
        const firstname = req.body.first_name
        const lastname = req.body.last_name
        const email = req.body.email
        const password = req.body.password
        const address = req.body.address
        const city = req.body.city
        const state = req.body.state
        const zipCode = req.body.ZIP
        const phoneNumber = req.body.phone_number
        const user = new User({
            country: country,
            fname : firstname,
            lname: lastname,
            email: email,
            password: password,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode,
            phoneNumber: phoneNumber
        })
        
        user.save(function(err){
            if (err){
                res.json(err.message)
            }
            else{
                res.json("Registered successfullly")
            }
        })
        
    }
    
    
    }
)
app.listen(3000, (req,res)=>{
    console.log("Server is running successfullly!")
})
