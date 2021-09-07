const mongoose = require("mongoose")
const { string } = require("yup")
const Schema = mongoose.Schema

const projectSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model("Web Porfolio", projectSchema)