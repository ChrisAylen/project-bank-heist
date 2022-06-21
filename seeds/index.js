const seedUsers = require('./userData');
const seedaccount = require('./accountData');
const seedtransaction = require('./transactionData');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USER SEEDED -----\n');

  await seedaccount();
  console.log('\n----- ACCOUNT SEEDED -----\n');

  await seedtransaction();
  console.log('\n----- TRANSACTION SEEDED -----\n');
    process.exit(0);
};

seedAll();
