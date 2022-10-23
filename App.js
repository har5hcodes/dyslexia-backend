const express = require('express')
const bodyParser = require('body-parser');

const swaggerApis = require('./Routes/Swagger-ui')
const userRegRoute = require('./Routes/User-reg-route');
const userGetRoute = require('./Routes/User-data-route');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use('/user-reg',userRegRoute);
app.use('/user',userGetRoute);

app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({
        message : error.message || "Unknown error occured"
    })
})

// mongoose
//     .connect()
//     .then(()=>{
//         console.log("DB connected successfully");
//         app.listen(5000)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
app.listen(5000);