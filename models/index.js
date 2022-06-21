const User = require('./User');
const Account = require('./Account');
const Transaction = require('./Transaction');

User.hasMany(Account, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Account.hasMany(Transaction, {
  foreignKey: 'account_id',
});

Account.belongsTo(User, {
  foreignKey: 'id'
});

Transaction.belongsTo(Account, {
  foreignKey: 'account_id'
});


  




module.exports = { User, Account, Transaction};
