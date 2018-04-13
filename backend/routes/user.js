module.exports = (app) => {
  const { user } = app.controllers;

  app.get('/users/get', user.getAll);
  app.get('/user/get/:id', user.get);
  app.post('/user/add', user.add);
  app.put('/user/edit/:id', user.update);
  app.delete('/user/delete/:id', user.delete);
};
