require('dotenv').config({
    path: ".env"
});


module.exports = {
    dialect: 'mysql',
    host: process.env.HOST,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    define: {
        timestamps: true,
        underscored: true,
    },
}