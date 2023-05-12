// data base connection using mongodb

module.exports = {
    port: process.env.PORT || 3000, // Port number for the server to listen on
    dbUrl: process.env.DB_URL || 'mongodb://127.0.0.1:27017/books', // URL for the MongoDB database
    jwtSecret: process.env.JWT_SECRET || 'mysecret' // Secret key for JWT authentication
  };
  