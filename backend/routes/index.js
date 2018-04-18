module.exports = (app) => {
  const { db_ddl_migration } = app.controllers;
  
  app.get('/runmigrationdb', db_ddl_migration.run);
}