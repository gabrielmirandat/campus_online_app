module.exports = (app) => {
  const { db_ddl_migration, news, access } = app.controllers;
  
  app.get('/runmigrationdb', db_ddl_migration.run);
  app.get('/allnews', news.getAll)
  app.get('/news/:date', news.getByDate)
  app.post('/access', access.checkKey)
}