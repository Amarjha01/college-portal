/* This code snippet is using the Mongoose library in JavaScript to connect to a MongoDB database named
'collegeDB' running on localhost at port 27017. */
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/collegeDB');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amarjha880:CQlHNlLlkHtUC0X8@cluster1.vl2yo5n.mongodb.net/collegeDB', { useNewUrlParser: true, useUnifiedTopology: true });

//mongodb+srv://<username>:<password>@<cluster-host>/<database-name>?retryWrites=true&w=majority