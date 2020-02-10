const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

module.exports = {
   "type": "postgres",
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASS,
   "database": process.env.DB_NAME,
   "synchronize": true,
   "logging": true,
   "entities": [
       __dirname + "/src/models/*.ts"
   ],
   "migrations": [
     __dirname + "/src/migrations/*.ts"
   ],
   "cli": {
     "migrationsDir": __dirname + '/src/migrations'
   },
   "subscribers": [
     __dirname + "/src/subscribers/*.ts"
   ]
}
