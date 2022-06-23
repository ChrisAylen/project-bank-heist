const router = require('express').Router();
const userRoutes = require('./user-routes');
const accountRoutes = require('./accountRoutes');

router.use('/user', userRoutes);
router.use('/account', accountRoutes);


module.exports = router;
