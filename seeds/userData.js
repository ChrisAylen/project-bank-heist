const {User} = require('../models/');

//These passwords are all password1234 (no salt)

const userData = [
  {
    "name": "Sal",
    "email": "sal@hotmail.com",
    "password": "$2b$10$l/4xFElwIqzHaAfG80s9e.CqPLc8x0W/p1gIU024S.rHNKYYLcW8C"
  },
  {
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "$2b$10$l/4xFElwIqzHaAfG80s9e.CqPLc8x0W/p1gIU024S.rHNKYYLcW8C"
  },
  {
    "name": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "$2b$10$l/4xFElwIqzHaAfG80s9e.CqPLc8x0W/p1gIU024S.rHNKYYLcW8C"
  },
  {
    "name": "Jordan",
    "email": "jordan99@msn.com",
    "password": "$2b$10$l/4xFElwIqzHaAfG80s9e.CqPLc8x0W/p1gIU024S.rHNKYYLcW8C"
  },
  {
    "name": "Blake",
    "email": "the_blake@yahoo.com",
    "password": "$2b$10$l/4xFElwIqzHaAfG80s9e.CqPLc8x0W/p1gIU024S.rHNKYYLcW8C"
  }
];
//TODO: Hash the password on the way in
const seedUsers = () => User.bulkCreate(userData);
module .exports = seedUsers;
