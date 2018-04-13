const env = require('./env');

const db_cfg = {};

// local
if(env == 'local') {
	db_cfg.host = 'localhost';
	db_cfg.user = 'user';
	db_cfg.password = 'password';
  db_cfg.database = 'campus_online_local';
}
// prod
if(env == 'prod') {
  db_cfg.host = '??';
	db_cfg.user = 'root';
	db_cfg.password = 'root';
  db_cfg.database = 'campus_online_prod';
}

module.exports = db_cfg;