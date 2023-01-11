const { Game, Login } = require('../db/games.js');

module.exports = {
  getGamesDB: (data, cb) => {
    Game.find(data, (err, results) => {
      if (!err) {
        cb(null, results);
      } else {
        console.error(err);
        cb(err);
      }
    });
  },

  getGameDB: (data, cb) => {
    Game.findOne(data, (err, results) => {
      if (!err) {
        cb(null, results);
      } else {
        console.error(err);
        cb(err);
      }
    });
  },

  addGameDB: (data, cb) => {
    Game.create(data, (err, results) => {
      if (!err) {
        cb(null, results);
      } else {
        console.error(err);
        cb(err);
      }
    });
  },

  updateCountDB: (data, cb) => {
    Game.updateOne(data, (err, results) => {
      if (!err) {
        cb(null, results);
      } else {
        console.error(err);
        cb(err);
      }
    });
  },

  addUserDB: (data, cb) => {
    Login.create(data, (err, results) => {
      if (!err) {
        cb(null, results);
      } else {
        console.error(err);
        cb(err);
      }
    });
  },
};
