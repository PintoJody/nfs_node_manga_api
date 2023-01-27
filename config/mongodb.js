const mongoose = require('mongoose');

mongoose.connect(
   "mongodb+srv://Djoba20:rzt3UW4GzxcqnEzU@cluster0.aepo2qg.mongodb.net/nfs_node_manga",
   { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    },
   (err) => {
       if(!err) console.log("Mongodb connected");
       else console.log("Connection error :" + err);
   }
)