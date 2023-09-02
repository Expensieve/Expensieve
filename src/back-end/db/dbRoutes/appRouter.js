const { Router } = require('express');
const {groupController} = require('../dbControllers/groupController');
const { userController } = require('../dbControllers/userController');
const { serviceController } = require('../dbControllers/serviceController');
const { subscriptionController } = require('../dbControllers/subscriptionController');
const { transactionController } = require('../dbControllers/transactionController');
const appRouter = Router();


//-----------------------------------testing Router for all available paths-----------------------------------//

//'/user'
appRouter.get('/user', userController.user, (req, res)=>{
  console.log('Router for user is working!')
  res.status(200)
});

//'/group'
appRouter.get('/group', groupController.group, (req, res)=>{
  console.log('Router for group is working!')
  res.status(200)
});

//'/service'
appRouter.get('/service', serviceController.service, (req, res)=>{
  console.log('Router for service is working!')
  res.status(200)
});

//'/subscription'
appRouter.get('/subscription', subscriptionController.subscription , (req, res)=>{
  console.log('Router for subscription is working!')
  res.status(200)
});

//'/transaction'
appRouter.get('/transaction', transactionController.transaction , (req, res)=>{
  console.log('Router for transaction is working!')
  res.status(200)
});

//-----------------------------------Obtain all Data-----------------------------------//

//ALL DATA FROM USERS, GROUPS, AND SERVICES DB
appRouter.get('/all', userController.getAllUsers, groupController.getAllGroups, serviceController.getAllServices, (req, res)=>{
  console.log('Fetching all users, groups and services');
  res.status(200).send(
    {
      userData : res.locals.allUsers,
      serviceData : res.locals.allServices,
      groupData: res.locals.allGroups
    });
});


//-----------------------------------'/user' based routes-----------------------------------//

//GET ALL USERS ONLY
appRouter.get('/user/all', userController.getAllUsers, (req, res)=>{
  console.log('Data for users fetched')
  res.status(200).send({
    users: res.locals.allUsers
  });
});

//CREATE A NEW USER
/*
JSON body format:
 {
  "userName": "'string'",
  "firstName": "'string'",
  "lastName": "'string'",
  "pin?": number
 }
*/
appRouter.post('/user/register', userController.createUser, (req, res)=>{
  console.log(`${res.locals.newUser} has been added to database!`)
  res.status(200)
})


//-----------------------------------'/group' based routes-----------------------------------//

//OBTAIN ALL GROUPS ONLY
appRouter.get('/group/all', groupController.getAllGroups, (req, res)=>{
  console.log('Data for groups fetched')
  res.status(200).send({
    groups: res.locals.allGroups
  });
});

//CREATE A NEW GROUP
/*
JSON body format:
 {
  "name": "'string'",
  "owner": number,
 }
*/
appRouter.post('/group/new', groupController.createNewGroup, (req, res)=>{
  console.log(`${res.locals.newGroup} has been added to database!`)
  res.status(200)
})

//-----------------------------------'/service' based routes-----------------------------------//

//OBTAIN ALL SERVICES ONLY
appRouter.get('/service/all', serviceController.getAllServices, (req, res)=>{
  console.log('Data for services fetched');
  res.status(200).send({
    services: res.locals.allServices
  })
});

//CREATE A NEW SERVICE
/*
JSON body format:
 {
  "name": "'string'",
  "owner": number,
  "description": "'string'",
  "password": "'string'",
  "cost": number,
  "url": "'string'"
 }
*/
appRouter.post('/service/new', serviceController.addNewService, (req,res)=>{
  console.log(`${res.locals.newService} has been added to database`);
  res.status(200)
});


//-----------------------------------'/subscription' based routes-----------------------------------//



//-----------------------------------'/transaction' based routes-----------------------------------//



module.exports = appRouter;