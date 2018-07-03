// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as jobController from '../controllers/job.server.controller';

// get an instance of express router
const jobRouter = express.Router();

jobRouter.route('/view')
     .get(jobController.getJobs);

jobRouter.route('/add')
     .post(jobController.addJob);
	 
jobRouter.route('/update')
     .put(jobController.updateJob);


jobRouter.route('/:id')
      .get(jobController.getJob)
      .delete(jobController.deleteJob);


export default jobRouter;