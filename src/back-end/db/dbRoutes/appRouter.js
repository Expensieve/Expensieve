import { Router } from 'express';
import { groupController } from '../dbControllers/groupController';
const appRouter = Router();



//Add routes for '/user' here


//Add routes for '/group' here
groupRouter.get('/', groupController.group, (req, res)=>{
  res.status(200)
})


//Add routes for '/service' here


//Add routes for '/subscription'here


//Add routes for '/transaction' here



export default appRouter;