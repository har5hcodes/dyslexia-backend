// video :https://www.youtube.com/watch?v=apouPYPh_as


const express= require('express');
const app = express();
const bodyParser = require('body-parser');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
console.log("Backend started")
// https://swagger.io/specification/
const swaggerOptions = {
    swaggerDefinition : {
        info : {
            title : "Dyslexia API",
            description : "Here are the list of APIs you would be needing during development. Please contact aryachandanreddy@gmail.com for any queries",
            contact :{
                name : "Harstound"
            },
            servers : ["http://localhost:5000"]
        }
    },
    //['./routes/*.js]
    apis:["App.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.get("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

 


module.exports = app
// video :https://www.youtube.com/watch?v=apouPYPh_as