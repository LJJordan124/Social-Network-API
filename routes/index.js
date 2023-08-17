//Import necessary modules and routes.
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

//Defined root router that will handle routes for application.
router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

//Exporting routes so it can be used in application
module.exports = router;