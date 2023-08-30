var express = require('express');
var routerFranchise = express.Router();
var Franchise = require("../models/franchiseModel");

routerFranchise.post('/addfranchise', function(req, res, next) {
    console.log(req.body);

    try {
        var { name, email, mobile, address, location, comments } = req.body;
        var newFranchise = new Franchise({
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            location: location,
            comments: comments,
        });

        newFranchise.save().then((success) => {
            console.log(success);
            res.status(201).json({ message: 'Franchise added successfully', franchise: success });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Failed to add franchise', error: error });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred', error: error });
    }
});

// GET API to retrieve all franchises
routerFranchise.get('/getfranchises', function(req, res, next) {

  Franchise.find()
      .then(franchises => {
          res.status(200).json(franchises);
      })
      .catch(error => {
          console.log(error);
          res.status(500).json({ message: 'Failed to fetch franchises', error: error });
      });
});


module.exports = routerFranchise;