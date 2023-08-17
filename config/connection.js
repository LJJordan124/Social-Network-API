//Import necessary modules from 'mongoose' library.
const { connect, connection } = require('mongoose');

//Defined connectionString for the MongoDB database.
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetDB';

//Establish the connection to the database using the provided connection string.
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Export the connection.
module.exports = connection;