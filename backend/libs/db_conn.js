const mysql = require('mysql'),
    db_cfg = require('../config/db');



let pool = mysql.createPool({
    host: db_cfg.host || "localhost",
    user: db_cfg.user || "root",
    password: db_cfg.password || "",
    database: db_cfg.database || "campus_online_local",
    connectionLimit: 100,
    acquireTimeout: 300000
});
    
module.exports = pool;