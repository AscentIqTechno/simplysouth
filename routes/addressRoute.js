var express = require('express');
var routerAddress = express.Router();
var Address = require('../models/addressModels');


routerAddress.post('/addaddress', function(req, res, next) {
    console.log(req.body);

    try {
        var { name, mobile, address,} = req.body;
        var newAddress = new Address({
            name: name,
            mobile: mobile,
            address: address,
        });

        newAddress.save().then((success) => {
            console.log(success);
            res.status(201).json({ message: 'Address added successfully', address: success });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Failed to add Address', error: error });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred', error: error });
    }
});

// GET API to retrieve all franchises
routerAddress.get('/getaddress', function(req, res, next) {

    Address.find()
      .then(address => {
          res.status(200).json(address);
      })
      .catch(error => {
          console.log(error);
          res.status(500).json({ message: 'Failed to fetch franchises', error: error });
      });
});


module.exports = routerAddress;