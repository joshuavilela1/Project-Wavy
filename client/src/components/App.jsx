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
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    axios.get('/api/games').then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  }, [forceUpdate]);

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
        <Route path="/rankings" element={<Rankings />} />
      </Routes>
    </>
  );
};

export default App;
