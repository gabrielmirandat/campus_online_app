var express = require('express')
	, router = express.Router()
  , dbMigration = require('../controllers/db_ddl_migration')
  
  router
	.get('/runmigrationdb', dbMigration.controller)