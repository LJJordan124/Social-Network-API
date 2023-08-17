//Importing the required modules.
const express = require('express');

//Setting up the connection to the database.
const db = require('./config/connection');
const routes = require('./routes');

//Defined port for the server to listen to.
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Once the connection is open, start the server and listen on the port specifed.
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});