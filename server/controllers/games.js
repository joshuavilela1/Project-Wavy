const { Game, Login } = require('../db/games.js');
const {
  games: { getGamesDB, getGameDB, addGameDB, updateCountDB, addUserDB },
} = require('../models');

module.exports = {
  getGames: (req, res) => {
    getGamesDB(req.body, (err, results) => {
      if (!err) {
        console.log(results);
        res.send(results).status(200);
      } else {
        console.error(err);
        res.send(err).status(500);
      }
    });
  },

  getGame: (req, res) => {
    getGameDB(req.params, (err, results) => {
      if (!err) {
        console.log(results);
        res.send(results).status(200);
      } else {
        console.error(err);
        res.send(err).status(500);
      }
    });
  },

  addGame: (req, res) => {
    addGameDB(req.body, (err, results) => {
      if (!err) {
        console.log(results);
        res.send(results).status(201);
      } else {
        console.error(err);
        res.send(err).status(500);
      }
    });
  },

  updateCount: (req, res) => {
    updateCountDB(req.params, (err, results) => {
      if (!err) {
        console.log(results);
        res.send(results).status(201);
      } else {
        console.error(err);
        res.send(err).status(500);
      }
    });
  },

  addUser: (req, res) => {
    addUserDB(req.body, (err, results) => {
      if (!err) {
        console.log(results);
        const user = { name: results.name, password: results.password };
        res.send(user).status(201);
      } else {
        console.error(err);
        res.send(err).status(500);
      }
    });
  },
};
