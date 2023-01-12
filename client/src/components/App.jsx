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
  const [navLog, setNavLog] = useState(true);

  useEffect(() => {
    axios
      .get('/api/games')
      .then((response) => {
        const sortedData = response.data.sort((a, b) => b.votes - a.votes);
        let rand1 = Math.floor(Math.random() * response.data.length);
        let rand2 = Math.floor(Math.random() * response.data.length);
        while (rand1 === rand2) {
          let rand2 = Math.floor(Math.random() * response.data.length);
          if (rand1 !== rand2) {
            break;
          }
        }
        setGame1(response.data[rand1]);
        setGame2(response.data[rand2]);
        setGames(sortedData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [forceUpdate, vote]);

  return (
    <Box
      display="flex"
      sx={{ background: '#0A2239', height: '100%', width: '100%' }}
    >
      <h1
        style={{
          fontSize: '72px',
          fontFamily: 'Roboto',
          textAlign: 'center',
          paddingTop: '24px',
          marginBottom: '4px',
        }}
      >
        Hack R(e)anker
      </h1>
      <NavBar
        user={user}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        navLog={navLog}
        setNavLog={setNavLog}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Login
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
              navLog={navLog}
              setNavLog={setNavLog}
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
    </Box>
  );
};

export default App;
