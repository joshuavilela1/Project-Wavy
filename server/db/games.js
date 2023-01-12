require('dotenv').config();
const { mongoose, Schema } = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

const loginSchema = new Schema({
  user: String,
  password: String,
  email: String,
});

const gameSchema = new Schema(
  {
    name: { type: String, required: true },
    genre: [
      {
        type: String,
      },
    ],
    votes: { type: Number, default: 0 },
    image_url: String,
  },
  { timestamps: true }
);

const Login = new mongoose.model('login', loginSchema);
const Game = new mongoose.model('game', gameSchema);

// run();
// async function run() {
//   const newgame = new Game({
//     name: 'The Legend of Zelda: Breath of the Wild',
//     genre: ['Action-adventure', 'Puzzle', 'Open-World', 'Action'],
//     votes: 0,
//     image_url:
//       'https://imgix.ranker.com/user_node_img/4269/85372037/original/85372037-photo-u40',
//   });
//   await newgame.save();
//   console.log(newgame);
// }

module.exports.Game = Game;
module.exports.Login = Login;
