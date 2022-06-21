const seedUsers = require('./userData');
const seedBlogs = require('./blogData');
const seedComments = require('./commentData');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedBlogs();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- TAGS SEEDED -----\n');
    process.exit(0);
};

seedAll();
