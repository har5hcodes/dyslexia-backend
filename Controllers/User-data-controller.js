// const uuid = require('uuid/v4');
const { v4 } = require('uuid');
const HttpError = require("../models/http-error");

const dummy_users =[
    {
        id : 'u1',
        firstName : 'Harsh',
        lastName : 'Putta',
        dateOfBirth : '25-03-2002',
        class : 'UKG',
        email : 'hputta@gmail.com'
    },
    {
        id : 'u2',
        firstName : 'Arya',
        lastName : 'Chan',
        dateOfBirth : '17-03-2002',
        class : 'LKG',
        email : 'aryachano@gmail.com'
    }
]

const getUserDatabyId =(req,res,next)=>{
    const userId = req.params.uid;
    const userData = dummy_users.find(user =>{
        return userId === user.id
    })
    if(!userData){
        const error = new HttpError('Could not find a user with the provided id',404);
        return next(error);
    }
    res.json({
        userData
    });
}

const registerUser = (req,res,next)=>{
    const {firstName,lastName,email,dob,classGrade} = req.body;
    const createdUser = {
        id :v4(),
        firstName,lastName,email,dob,classGrade 
    };
    dummy_users.push(createdUser);
    res.status(201).json({
        user : createdUser
    });
};


exports.getUserDatabyId = getUserDatabyId;
exports.registerUser = registerUser