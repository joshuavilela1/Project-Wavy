import axios from 'axios';
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const { useState, useEffect } = React;

const GameEntry = ({ game }) => {
  return (
    <Box
      display="flex"
      sx={{
        paddingBottom: 2,
        paddingTop: 2,
        borderBottom: 2,
        marginBottom: 4,
        minWidth: 750,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ paddingRight: 2, paddingLeft: 2 }}
      >
        <img
          src={game.image_url}
          alt="game-photo"
          width="150"
          height="150"
        ></img>
        <Typography variant="h5">Votes: {game.votes}</Typography>
      </Box>
      <Box display="flex" flexDirection="column" sx={{ paddingBottom: 8 }}>
        <Typography variant="h5">{game.name}</Typography>
        {game.genre.map((item, index) => {
          return (
            <div key={index}>
              <Typography variant="body1">{item}</Typography>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default GameEntry;
