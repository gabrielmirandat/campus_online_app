module.exports = (app) => {
  const { db_ddl_migration, news, access } = app.controllers;
  
  app.get('/runmigrationdb', db_ddl_migration.run);
  app.get('/allnews', news.getAll)
  app.post('/addnews', news.addNews)
  app.get('/news/:date', news.getByDate)
  app.get('/news/20/:date', news.get20ByInitialDate)
  app.post('/access', access.checkKey)
  }