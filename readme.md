1. install express
2. install nodemon in dev (--save-dev)
3. create index.js
4. create routes folder
  4.1 create auth.js (authentication routes)
5. create start script inside package.json ("start": "nodemon index.js")
6. database on https://cloud.mongodb.com/
  6.1 create a cluster
  6.2 go to security tab --> mongoDB users --> add a new user (user: nox, pwd: nox)
  6.3 go to network access --> IP access list --> select allow access from anywhere
  6.4 go to network access --> IP access list --> select current IP address
  6.5 connect to the application using the option connect your application
    6.5.0 install mongoose
    6.5.1 inside index.js use mongoose.connect
    6.5.2 install dotenv to store the pwd we have to insert inside the string we have just copied
    6.5.3 inside .env file copy the string with the modified pwd 
7. create data model
  7.1 create new folder called model
  7.2 create User.js
8. create validation for the data model
  8.1 install Joi (npm i @hapi/joi)
  8.2 create validation.js file
9. pwd encryption
  9.1 install bcryptjs
10. jwt
  10.1 install jsonwebtoken
  10.2 add env variable inside .env file




   