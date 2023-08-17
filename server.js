//Importing the required modules.
const express = require('express');

//Setting up the connection to the database.
const db = require('./config/connection');
const routes = require('./routes');

//Defined port for the server to listen to.
const PORT = process.env.PORT || 3001;
const app = express();