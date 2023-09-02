//Handle all queries relating to the creation, viewing and assignment of groups
const db = require('../dbModels/expensieveDB');

const groupController = {};

//TEST ROUTE
groupController.group = (req, res, next) =>{
  console.log('Group Controller is functioning!');
  next();
};


//VERIFY GROUP INFO


//GET ALL GROUPS
groupController.getAllGroups = async (req, res, next) =>{
  console.log('Fetching all groups');
  const queryString = `SELECT * FROM groups`;
  await db.query(queryString)
    .then((data)=>{
      res.locals.allGroups = data.rows;
  }) 
  next();
  };

//VERIFY GROUP OWNER TYPE (CURRENT USER, OTHERS)


//Get groups owned by other users


//CREATE NEW GROUP

groupController.createNewGroup = (req, res, next) => {
  console.log('Creating New Group');
  const {name, owner} = req.body;
  const queryString = `INSERT INTO groups (name, owner) values(${name}, ${owner});`
  res.locals.newGroup = `Group: ${name}`;
  db.query(queryString);
  next();
}



//Delete a group


//Update a group


module.exports = {groupController};