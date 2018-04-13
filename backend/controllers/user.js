module.exports = (app) => {
  const db = require('../libs/db_conn.js');

  const UserController = {

    getAll(req, res) {
      let sql = 'SELECT * FROM users';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })
    },

    get(req, res) {
      let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send({data: result});
      })
    },

    add(req, res) {
      let data = req.body;
      let sql = 'INSERT INTO users SET ?';
      let query = db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send({data: result.insertId});
      });
    },

    update(req, res) {
      let data = req.body;
      let sql = `UPDATE users SET ? WHERE id = ${req.params.id}`;
      let query = db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send({data: "Atualizado com sucesso!"});
      });
    },

    delete(req, res) {
      let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send({data: "Deletado com sucesso!"});
      })
    }
  }
  return UserController
};    