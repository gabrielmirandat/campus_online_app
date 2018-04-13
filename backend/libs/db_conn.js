var mysql = require('mysql'),
    db_cfg = require('../config/db'),
    pool;

module.exports = () => {
    //singleton to only connect to the database once
    if (!pool) {
        pool = mysql.createPool({
            host: db_cfg.host || "localhost",
            user: db_cfg.user || "user",
            password: db_cfg.password || "password",
            database: db_cfg.database || "campus_online_local",
            connectionLimit: 100,
            acquireTimeout: 300000
        });
    }
    return pool;
}