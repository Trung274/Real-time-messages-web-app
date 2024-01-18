module.exports = {
  db: {
    host: 'localhost',
    port: '3306', // MySQL default port
    user: 'root',
    password: '', // Provide your database password
    database: 'music_server',
  },
  jwtSecret: 'your_jwt_secret', // Replace with your actual JWT secret key
};
