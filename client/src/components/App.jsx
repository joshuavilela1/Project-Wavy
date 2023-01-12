import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamesFeed from './GamesFeed/GamesFeed.jsx';
import Login from './Login.jsx';
import Rankings from './Rankings/Rankings.jsx';
import NavBar from './NavBar/NavBar.jsx';
import AddGame from './AddGame.jsx';
import { Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import Box from '@material-ui/core/Box';
const { useState, useEffect } = React;

const App = () => {
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [games, setGames] = useState([]);
  const [game1, setGame1] = useState({});
  const [game2, setGame2] = useState({});
  const [forceUpdate, setForceUpdate] = useState(false);
  const [vote, setVote] = useState(false);

  useEffect(() => {
    axios
      .get('/api/games')
      .then((response) => {
        console.log(response.data);
        let rand1 = Math.floor(Math.random() * response.data.length);
        let rand2 = Math.floor(Math.random() * response.data.length);
        if (rand1 === rand2) {
          let rand2 = Math.floor(Math.random() * response.data.length);
        }
        setGame1(response.data[rand1]);
        setGame2(response.data[rand2]);
        setGames(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [forceUpdate, vote]);

  return (
    <>
      <h1
        style={{
          fontSize: '72px',
          fontFamily: 'Roboto',
          textAlign: 'center',
          paddingTop: '48px',
        }}
      >
        Hack R(e)anker
      </h1>
      <NavBar
        user={user}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Login
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/addgame"
          element={
            <AddGame
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
            />
          }
        />
        <Route path="/gamesfeed" element={<GamesFeed games={games} />} />
        <Route
          path="/rankings"
          element={
            <Rankings
              game1={game1}
              game2={game2}
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
              vote={vote}
              setVote={setVote}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
