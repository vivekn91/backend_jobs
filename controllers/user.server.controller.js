// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import User from '../models/users.server.model';


export const getUsers = (req,res) => {
  User.find().exec((err,users) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'users fetched successfully',users});
  });
}

export const addUser = (req,res) => {
  console.log(req.body);
  const newJob = new User(req.body);
  newJob.save((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'user added successfully',user});
  })
}

export const updateUser = (req,res) => {
  User.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(user);
    return res.json({'success':true,'message':'Updated users successfully',user});
  })
}

export const getUserLogin = (req,res) => {
  User.find({email: req.body.email, usrPassword: req.body.usrPassword}).exec((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(user.length){
      return res.json({'success':true,'message':'Jobs fetched by id successfully',user});
    }
    else{
      return res.json({'success':false,'message':'Jobs with the given id not found'});
    }
  })
}


