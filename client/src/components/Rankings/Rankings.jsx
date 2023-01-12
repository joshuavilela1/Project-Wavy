import axios from 'axios';
import React from 'react';
import { Grid, Box } from '@mui/material';

const { useState, useEffect } = React;

const Rankings = () => {
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
      <h1>Hello I Am Rankings</h1>
    </Box>
  );
};

export default Rankings;
