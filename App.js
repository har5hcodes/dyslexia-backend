const express = require('express')
const bodyParser = require('body-parser');

const swaggerApis = require('./Routes/Swagger-ui')
const userRegRoute = require('./Routes/User-reg-route');
const userGetRoute = require('./Routes/User-data-route');

const app = express();

app.use('/user-reg',userRegRoute);
app.use('/user-get',userGetRoute);
app.use('/api-docs',swaggerApis);


app.listen(5000);