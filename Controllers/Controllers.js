const express = require('express');
const bodyparser = require('body-parser');
const Checklists = require('../models/models');

const addData = async (req , res) =>
    {
    var values = req.data;
    Checklists.insertMany(values)
    .then( result =>{
        return res.status(201).json("Data added");
    })
    .catch( err =>{
        return res.status(500).json(err);
    })
}
exports.addData = addData;