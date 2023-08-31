const express = require('express');

const subscriptionController = require('../dbControllers/subscriptionController'); //subscription operations
const userController = require('../dbControllers/userController'); // verifying user
const groupController = require('../dbControllers/groupController'); // verifying group
const serviceController = require('../dbControllers/serviceController'); //verifying service

const subscriptionRouter = express.Router();

//Add routes for '/subscription'here





module.exports = subscriptionRouter;