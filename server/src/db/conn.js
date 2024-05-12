/* This code snippet is using the Mongoose library in JavaScript to connect to a MongoDB database named
'collegeDB' running on localhost at port 27017. */
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/collegeDB');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://amarjha880:CQlHNlLlkHtUC0X8@cluster1.vl2yo5n.mongodb.net/collegeDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Require the dotenv package to load environment variables from .env file
require('dotenv').config();

const mongoose = require('mongoose');

// Retrieve the MongoDB URI from environment variables
const dbURI = process.env.MONGODB_URI;

// Connect to MongoDB using the URI from environment variables
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//mongodb+srv://<username>:<password>@<cluster-host>/<database-name>?retryWrites=true&w=majority