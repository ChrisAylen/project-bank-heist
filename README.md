# Bank Heist

[]: # Language: markdown
[]: # Path: README.md

![](https://img.shields.io/badge/license-MIT-blue.svg)
    
## Description
    
The application provides a rudimentary online banking template.  It is a full stack application that primarily utilises Node.js and it employs the MVC pattern.

The application has a front end that is built using Javascript and Bootstrap and a back end that is built using Node.js.

The back end database uses MySQL.

The back end also provides a REST API that is used serverside end as well as a REST API that can be accessed directly from the Front End.  Both of these APIs require Authentication.

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Screenshot](#screenshots)

* [Deployed Version](#Deployment)

* [Questions](#questions)

* [To Do](#ToDo)

## Installation
    
'npm i' to install the necessary dependencies.

Create a file named .env with the following contents:

```
DB_NAME=bank_db
DB_USER=root
DB_PASSWORD=yourpassword
DB_HOST=yourDbHostIp
PORT=DBPort
```

### Setting up the database

run schema.sql at a mySQL prompt to create the database and tables.
```
source ./db/schema.sql
```
run 'npn run seed' to seed the database with some data.
```
source ./db/seeds.sql
```

## Usage

The application supports the follwing funcitonalities:

# Users
```
1. Create a new user
2. Login an existing user
```
# Accounts
```
1. Create a new account
2. View all accounts and balances
3. View an account and its associated transactions
```
# Transactions
```
1. Create a new transaction
```

## API

# Logout
```
curl --request POST \
  --url http://localhost:3001/api/user/logout/ \
  --cookie connect.sid=s%253ArSlAvio9CwZvRZtFePi0QDUbS0-QQ9X8.kv9oK0dAJ6%252BEhgRbnFq0suJdSwDBfLA%252BhZUBC7od4%252B8
```
# Login
```
curl --request POST \
  --url http://localhost:3001/api/user/login/ \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253ArSlAvio9CwZvRZtFePi0QDUbS0-QQ9X8.kv9oK0dAJ6%252BEhgRbnFq0suJdSwDBfLA%252BhZUBC7od4%252B8 \
  --data '{
	"email" : "test@gmail.com",
	"password" : "password123456"
}'
```
# Create User
```
curl --request POST \
  --url http://localhost:3001/api/user/ \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253ArSlAvio9CwZvRZtFePi0QDUbS0-QQ9X8.kv9oK0dAJ6%252BEhgRbnFq0suJdSwDBfLA%252BhZUBC7od4%252B8 \
  --data '{
	"username" : "test7",
	"email" : "test7@gmail.com",
	"password" : "password123456"
}'
```

# Create Account
```
curl --request POST \
  --url http://localhost:3001/api/account/ \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253ArSlAvio9CwZvRZtFePi0QDUbS0-QQ9X8.kv9oK0dAJ6%252BEhgRbnFq0suJdSwDBfLA%252BhZUBC7od4%252B8 \
  --data '{
	"account_name" : "savings_account",
	"interest_rate" : 0.5,
	"balance" : 15000
}'
```
# Get Account
```
curl --request GET \
  --url http://localhost:3001/api/account/6 \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253ArSlAvio9CwZvRZtFePi0QDUbS0-QQ9X8.kv9oK0dAJ6%252BEhgRbnFq0suJdSwDBfLA%252BhZUBC7od4%252B8
  ```
  # Get A Transaction
 ```
curl --request GET \
  --url http://localhost:3001/api/account/6 \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253ArSlAvio9CwZvRZtFePi0QDUbS0-QQ9X8.kv9oK0dAJ6%252BEhgRbnFq0suJdSwDBfLA%252BhZUBC7od4%252B8
```
  # Get All Transactions for an Account
```
    curl --request GET \
  --url http://localhost:3001/api/transaction/ \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253ArSlAvio9CwZvRZtFePi0QDUbS0-QQ9X8.kv9oK0dAJ6%252BEhgRbnFq0suJdSwDBfLA%252BhZUBC7od4%252B8 \
  --data '{
	"account_id": 34
}'
```
# Creat a Transaction
```
curl --request POST \
  --url http://localhost:3001/api/transaction/ \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253ArSlAvio9CwZvRZtFePi0QDUbS0-QQ9X8.kv9oK0dAJ6%252BEhgRbnFq0suJdSwDBfLA%252BhZUBC7od4%252B8 \
  --data '{
	"amount": 20.00,
	"account_from_id": "6",
	"account_to_id":2,
	"user_id":1
}'
```

# Screenshots

![alt Homepage](/assets/images/homepage.png)

![alt Accounts](/assets/images/Accounts.png)

![alt Transfer](/assets/images/Transfer.png)

![alt Statement](/assets/images/Statement.png)
# API

![alt Landing Page](/assets/images/API_Endpoints_available_from_the_FE.PNG)


# Front End


## Deployment

[Deployed Version]()
   
## License
    
This project is licenced under MIT

## Questions

[More of my work can be found here](https://github.com/ChrisAylen)

TODO: Add other team members Github links

## ToDo

The applicaiton needs:
```
    * More robust authentication on endpoints.  The current application allows any      
      authenticated user to access any transactions.  This is not secure.
    * Tests adding
    
```
    
