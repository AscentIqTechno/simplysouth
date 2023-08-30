var express = require('express');
var routerFeedback = express.Router();
var Feedback = require("../models/feedbackModel");

routerFeedback.post('/addfeedback', function(req, res, next) {
    console.log(req.body,"apin feedback working");

    try {
        var { name, email, mobile, address, comments } = req.body;
        var newFeedback = new Feedback({
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            comments: comments,
        });

        newFeedback.save().then((success) => {
            console.log(success);
            res.status(201).json({ message: 'Feedback added successfully', feedback: success });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Failed to add feedback', error: error });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred', error: error });
    }
});

// GET API to retrieve all franchises
routerFeedback.get('/getfeedback', function(req, res, next) {

  Feedback.find()
      .then(feedback => {
          res.status(200).json(feedback);
      })
      .catch(error => {
          console.log(error);
          res.status(500).json({ message: 'Failed to fetch feedback', error: error });
      });
});


module.exports = routerFeedback;