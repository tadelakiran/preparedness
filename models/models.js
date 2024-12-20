const express = require('express');
const mongoose = require('mongoose')

const Checklists = new mongoose.Schema({
    sheltername : {
        type : String
    } , 
    shlterCity : {
        type : String
    },
    shelterState : {
        type : String
    } ,
    shelterPincode : {
        type : String
    },
    capacity : {
        type: String
    },
    description : {
        type : String
    },
    contact : {
        type : String
    },
    rating : {
        type : String
    },
    category : {
        type : String
    }

})

module.exports = mongoose.model('Checklists' , Checklists); 