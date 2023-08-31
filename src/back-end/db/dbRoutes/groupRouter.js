import { Router } from 'express';
import { groupController } from '../dbControllers/groupController';
const groupRouter = Router();




//Add routes for '/group' here
groupRouter.get('/', groupController.group, (req, res)=>{
  res.status(200)
})




export default groupRouter;