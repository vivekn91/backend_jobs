// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as userController from '../controllers/user.server.controller';

// get an instance of express router
const userRouter = express.Router();

userRouter.route('/view')
     .get(userController.getUsers);

userRouter.route('/add')
     .post(userController.addUser)
     .put(userController.updateUser);


userRouter.route('/login')
      .get(userController.getUserLogin);


export default userRouter;