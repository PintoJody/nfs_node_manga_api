const express = require('express'); 
const app = express(); 

//Connection to mongoDB
require('./config/mongodb');

const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const mangaRoute = require('./routes/manga');

app.use(cors()); 

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/manga', mangaRoute);

app.listen(3000, () => {
    console.log("Serveur is running !");
})