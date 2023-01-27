//EXPRESS
const express = require('express'); 
const app = express(); 

//Connection to mongoDB
require('./config/mongodb');

//CORS
const cors = require('cors'); 
app.use(cors()); 


const bodyParser = require('body-parser'); 
const mangaRoute = require('./routes/manga');
const categoryRoute = require('./routes/category');


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/manga', mangaRoute);
app.use('/category', categoryRoute);

app.listen(3000, () => {
    console.log("Serveur is running !");
})