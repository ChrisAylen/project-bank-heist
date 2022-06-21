const {Transaction} = require('../models');

//These passwords are all password1234 (no salt)

const transactionData = [
  {
  "balance":300.23,
  "transaction_amount": 200,
  "transaction_id":1,
  "account_id":1,
  },
  {
    "balance":300.23,
    "transaction_amount": -200,
    "transaction_id":1,
    "account_id":2,
  },
  {
    "balance":300.23,
    "transaction_amount": -400,
    "transaction_id":2,
    "account_id":3,
  },
  {
    "balance":300.23,
    "transaction_amount": 200,
    "transaction_id":2,
    "account_id":5,
  },
    
    
  
    
  
  
];
//TODO: Hash the password on the way in
const seedUsers = () => Transaction.bulkCreate(transactionData);
module .exports = seedUsers;
