//Handle all user related queries, such as creating, deleting, and updating
const db = require('../dbModels/expensieveDB');

const userController = {};

userController.user = (req,res, next)=>{
  console.log('userController is functioning!');
  next();
}

//Verify User


//Get all Users
userController.getAllUsers = async (req, res, next)=>{
  console.log('Fetching all users');

  const queryString = `SELECT * FROM users`;
  await db.query(queryString)
    .then((data)=>{
      res.locals.allUsers = data.rows;
  }); 
  next();
}


//Create a User
/*
JSON body format:
 {
  "userName": "'string'",
  "firstName": "'string'",
  "lastName": "'string'",
  "pin?": number
 }
*/
userController.createUser = (req, res, next) => {
  console.log('Creating User');
  const {userName, firstName, lastName} = req.body;
  const queryString = `INSERT INTO users (username, firstname, lastname) values(${userName}, ${firstName}, ${lastName});`
  res.locals.newUser = `Username: ${userName}`;

  db.query(queryString);

  next();
}

//Delete a User


//Update User Info


//Get a list of all Users associated to current User


module.exports = {userController};