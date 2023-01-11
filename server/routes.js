require('dotenv').config();
const path = require('path');
const router = require('express').Router();
const {
  games: { getGames, getGame, addGame, updateCount, addUser },
} = require('./controllers');

router.get('/gamesfeed', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
router.get('/rankings', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

router.get('/api/games', getGames);
router.get('/api/games/:gameid', getGame);
router.patch('/api/games/:gameid', updateCount);
router.post('/api/games', addGame);
router.post('/api/users', addUser);
// router.post('/api/users/login');

module.exports = router;
