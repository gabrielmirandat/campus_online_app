const db = require('../lib/db_dml')
  , async = require('async')

module.exports = (app) => {
  const MigrationController = {
    async.waterfall([
      function(callback) {
        var data = {
          'db': 'F233_LICITACOES',
          'returnColumns': [
            'CD_UNIDADE_COMPRADORA'
          ],
          'json': {
            'CD_LICITACAO': asyncF.locals.cd_licitacao
          }
        };
        db.getValue(data, function(err, selectResult, successCallback) {
          if (err || selectResult.length < 1) {
            return successCallback(new Error("Erro ao obter unidade compradora a partir do código da licitação."));
          }
          
          asyncF.locals.cd_unidade_compradora = selectResult[0].CD_UNIDADE_COMPRADORA;
          console.log("CD_UNIDADE_COMPRADORA: ", selectResult[0].CD_UNIDADE_COMPRADORA);

          process.nextTick(function() { successCallback(null); });
        }, callback);
      },
    ], 
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(asyncF.responseVector);
      }
    }),
  
    // create db
    createDb(req, res) {
      let sql = 'CREATE DATABASE a4app_users';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Database created');
      });
    },

    // create users table
    createUsersTable(req, res) {
      let sql = 'CREATE TABLE users(id INT AUTO_INCREMENT, name VARCHAR(55) NOT NULL, email VARCHAR(55) UNIQUE NOT NULL, age INT, street VARCHAR(55), city VARCHAR(55), state VARCHAR(55), PRIMARY KEY(id))';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Users table created');
      });
    },

    // add first user
    addUser1(req, res) {
      let user1 = {name: 'Gabriel Miranda', age: 23, email: 'gabrielmirandatt@gmail.com', street: 'Cruzeiro Novo', city: 'Brasilia', state: 'DF'};
      let sql = 'INSERT INTO users SET ?';
      let query = db.query(sql, user1, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('User1 added');
      });
    },

    // create users table
    createCarsTable(req, res) {
      let sql = 'CREATE TABLE cars(id INT AUTO_INCREMENT, brand_id INT NOT NULL, model_id INT NOT NULL, chassi_number VARCHAR(17) UNIQUE NOT NULL, plate VARCHAR(7) UNIQUE NOT NULL, release_year VARCHAR(4), PRIMARY KEY(id), FOREIGN KEY (brand_id) REFERENCES brands(id), FOREIGN KEY (model_id) REFERENCES models(id))';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Cars table created');
      });
    },

    // add first car
    addCar1(req, res) {
      let car1 = {brand_id: 1, model_id: 1, chassi_number: "9BWDD21J814027665", plate: "HMT9887", release_year: "2003"};
      let sql = 'INSERT INTO cars SET ?';
      let query = db.query(sql, car1, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Car1 added');
      });
    },

    // create brands table
    createBrandsTable(req, res) {
      let sql = 'CREATE TABLE brands(id INT AUTO_INCREMENT, name VARCHAR(17) UNIQUE NOT NULL, PRIMARY KEY(id))';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Brands table created');
      });
    },

    // create models table
    createModelsTable(req, res) {
      let sql = 'CREATE TABLE models(id INT AUTO_INCREMENT, brand_id INT NOT NULL , name VARCHAR(17) UNIQUE NOT NULL, PRIMARY KEY(id), FOREIGN KEY (brand_id) REFERENCES brands(id))';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Models table created');
      });
    },

    // create brands table
    createRentalsTable(req, res) {
      let sql = 'CREATE TABLE rentals(id INT AUTO_INCREMENT, user_id INT NOT NULL, car_id INT NOT NULL, PRIMARY KEY(id), FOREIGN KEY (user_id) REFERENCES users(id), FOREIGN KEY (car_id) REFERENCES cars(id))';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Rentals table created');
      });
    },

    // add first rental
    addRental1(req, res) {
      let rental1 = {user_id: 1, car_id: 1};
      let sql = 'INSERT INTO rentals SET ?';
      let query = db.query(sql, rental1, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Rental1 added');
      });
    },
  }
  return MigrationController
};