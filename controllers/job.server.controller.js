// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import JobPortal from '../models/job.server.model';

export const getJobs = (req,res) => {
  JobPortal.find().exec((err,jobs) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Jobs fetched successfully',jobs});
  });
}

export const addJob = (req,res) => {
  console.log(req.body);
  const newJob = new JobPortal(req.body);
  newJob.save((err,job) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Job added successfully',job});
  })
}

export const updateJob = (req,res) => {
  JobPortal.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,job) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(job);
    return res.json({'success':true,'message':'Updated successfully',job});
  })
}

export const getJob = (req,res) => {
  JobPortal.find({_id:req.params.id}).exec((err,job) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(job.length){
      return res.json({'success':true,'message':'Jobs fetched by id successfully',job});
    }
    else{
      return res.json({'success':false,'message':'Jobs with the given id not found'});
    }
  })
}

export const deleteJob = (req,res) => {
  JobPortal.findByIdAndRemove(req.params.id, (err,job) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':job.jobTitle+' deleted successfully'});
  })
}
