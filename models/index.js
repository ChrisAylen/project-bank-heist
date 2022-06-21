const User = require('./User');



User.hasMany(Blog, { foreignKey: 'user_id', onDelete: 'cascade' });



module.exports = { User };
