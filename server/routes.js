require('dotenv').config();
const router = require('express').Router();
const {
  games: { getGames, getGame, addGame, updateCount, addUser },
} = require('./controllers');

router.get('/api/games', getGames);
router.get('./api/games/:gameid', getGame);
router.patch('/api/games/:gameid', updateCount);
router.post('/api/games', addGame);
router.post('/api/users', addUser);

module.exports = router;
