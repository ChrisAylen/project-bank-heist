const {Account} = require('../models');

//These passwords are all password1234 (no salt)

const accountData = [
  {
  "account_name":"current account",
  "balance":300.23,
  "interest_rate": 0.1,
  "user_id":1,
  },
  {
    "account_name":"saving account",
    "balance":0,
    "interest_rate": 0,
    "user_id":1,
  },
  {
    "account_name":"current account",
    "balance":301230.23,
    "interest_rate": 0.1,
    "user_id":2,
  },
  {
    "account_name":"saving account",
    "balance":0,
    "interest_rate": 0,
    "user_id":2,
  },
  {
    "account_name":"current account",
    "balance":300223.23,
    "interest_rate": 0.1,
    "user_id":3,
  },
  {
    "account_name":"saving account",
    "balance":0,
    "interest_rate": 0,
    "user_id":3,
  },
  {
    "account_name":"current account",
    "balance":123230.23,
    "interest_rate": 0.1,
    "user_id":4,
  },
  {
    "account_name":"saving account",
    "balance":0,
    "interest_rate": 0,
    "user_id":4,
  },
  {
    "account_name":"current account",
    "balance":30.23,
    "interest_rate": 0.1,
    "user_id":5,
  },
  {
    "account_name":"saving account",
    "balance":50.23,
    "interest_rate": 0,
    "user_id":5,
  },
];

const seedUsers = () => Account.bulkCreate(accountData);
module .exports = seedUsers;
