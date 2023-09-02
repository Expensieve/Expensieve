const { Router } = require('express');
const {groupController} = require('../dbControllers/groupController');
const { userController } = require('../dbControllers/userController');
const { serviceController } = require('../dbControllers/serviceController');
const { subscriptionController } = require('../dbControllers/subscriptionController');
const { transactionController } = require('../dbControllers/transactionController');
const appRouter = Router();



//Add routes for '/user' here

//test User Router
appRouter.get('/user', userController.user, (req, res)=>{
  console.log('Router for user is working!')
  res.status(200)
})

//Obtain all data
appRouter.get('/all', userController.getAllUsers, groupController.getAllGroups, serviceController.getAllServices, (req, res)=>{
  console.log('Did you get all the users?!');
  console.log(res.locals);
  res.status(200).send(
    {
      userData : res.locals.allUsers,
      serviceData : res.locals.allServices,
      groupData: res.locals.allGroups
    });
})

appRouter.post('/user/register', userController.createUser, (req, res)=>{
  console.log(`${res.locals.newUser} has been added to database!`)
  res.status(200)
})

//Add routes for '/group' here
appRouter.get('/group', groupController.group, (req, res)=>{
  console.log('Router for group is working!')
  res.status(200)
})


//Add routes for '/service' here
appRouter.get('/service', serviceController.service, (req, res)=>{
  console.log('Router for service is working!')
  res.status(200)
})

//Add routes for '/subscription'here
appRouter.get('/subscription', subscriptionController.subscription , (req, res)=>{
  console.log('Router for subscription is working!')
  res.status(200)
})

//Add routes for '/transaction' here
appRouter.get('/transaction', transactionController.transaction , (req, res)=>{
  console.log('Router for transaction is working!')
  res.status(200)
})


module.exports = appRouter;