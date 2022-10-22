const express = require('express');

const router = express.Router();

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

router.get('/:uid', (req,res,next)=>{
    const userId = req.params.uid;
    const userData = dummy_users.find(user =>{
        return userId === user.id
    })
    res.json({
        userData
    });
});

module.exports = router;
