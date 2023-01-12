import axios from 'axios';
import React from 'react';
import GameEntry from './GameEntry.jsx';
import { Grid, Box } from '@mui/material';
const { useState, useEffect } = React;

const GamesFeed = ({ games }) => {
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      maxWidth={800}
      alignItems="center"
      justifyContent={'center'}
      margin="auto"
      marginTop={5}
      padding={5}
      borderRadius={5}
    >
      {games.map((game, index) => {
        return <GameEntry key={index} game={game} />;
      })}
    </Box>
  );
};

export default GamesFeed;
