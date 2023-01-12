import axios from 'axios';
import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';

const { useState, useEffect } = React;

const Rankings = ({
  game1,
  game2,
  forceUpdate,
  setForceUpdate,
  vote,
  setVote,
}) => {
  const clickHandler = (e) => {
    e.preventDefault();

    setForceUpdate(!forceUpdate);
  };

  const vote1Handler = (e) => {
    e.preventDefault();

    axios
      .patch(`/api/games/${game1._id}`, {
        _id: game1._id,
        name: game1.name,
        genre: game1.genre,
        image_url: game1.image_url,
        votes: game1.votes,
      })
      .then((response) => {
        console.log(response);
        alert('Thanks for Voting!');
        setVote(!vote);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const vote2Handler = (e) => {
    e.preventDefault();

    axios
      .patch(`/api/games/${game2._id}`, {
        _id: game2._id,
        name: game2.name,
        genre: game2.genre,
        image_url: game2.image_url,
        votes: game2.votes,
      })
      .then((response) => {
        console.log(response);
        alert('Thanks for Voting!');
        setVote(!vote);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        sx={{ marginTop: 3, borderRadius: 3 }}
        variant="contained"
        color="primary"
        onClick={clickHandler}
      >
        Generate New Games
      </Button>
      <Box
        display="flex"
        maxWidth={1200}
        alignItems="center"
        justifyContent={'space-around'}
        margin="auto"
        marginTop={5}
        padding={5}
        borderRadius={5}
        sx={{ background: '#2E5EAA' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minWidth: 500, flexGrow: 1, paddingRight: 10 }}
        >
          <Typography variant="h4">
            {game1.name}
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={game1.image_url}
                alt="game-photo"
                width="500"
                height="500"
              ></img>
            </Box>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="primary"
              onClick={vote1Handler}
            >
              Vote 1
            </Button>
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minWidth: 500, flexGrow: 1 }}
        >
          <Typography variant="h4">
            {game2.name}
            <Box display="flex" justifyContent="center">
              <img
                src={game2.image_url}
                alt="game-photo"
                width="500"
                height="500"
              ></img>
            </Box>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="primary"
              onClick={vote2Handler}
            >
              Vote 2
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Rankings;
