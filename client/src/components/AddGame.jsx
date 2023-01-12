import axios from 'axios';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import {
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  TextField,
} from '@material-ui/core';

const { useState, useEffect } = React;

const AddGame = ({ forceUpdate, setForceUpdate }) => {
  const [gamename, setGameName] = useState('');
  const [genre, setGenre] = useState('');
  const [url, setUrl] = useState('');
  const [posted, setPosted] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    const genreArray = [];
    genreArray.push(genre);
    axios
      .post('/api/games', {
        name: gamename,
        genre: genreArray,
        image_url: url,
      })
      .then((response) => {
        console.log(response);
        alert('Game has been posted!');
        document.getElementById('game-name').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('image_url').value = '';
        setForceUpdate(!forceUpdate);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={'column'}
          maxWidth={400}
          minHeight={650}
          alignItems="center"
          justifyContent={'center'}
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={5}
          // boxShadow={'5px 5px 10px #ccc'}
          // sx={{
          //   ':hover': {
          //     boxShadow: '10px 10px 20px #ccc',
          //   },
          // }}
        >
          <Typography variant="h3" padding={3}>
            Add a Game
          </Typography>
          <FormControl margin="normal">
            <InputLabel>
              <Typography>Game Name:</Typography>
            </InputLabel>
            <Input
              required
              id="game-name"
              type={'text'}
              onChange={(e) => setGameName(e.target.value)}
              value={gamename}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel> Genre: </InputLabel>
            <Input
              id="genre"
              type={'text'}
              required
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel> Game Image URL: </InputLabel>
            <Input
              id="image_url"
              type={'text'}
              required
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
          </FormControl>
          <Button
            sx={{ marginTop: 3, borderRadius: 3, marginBottom: 50 }}
            variant="contained"
            color="primary"
            onClick={clickHandler}
          >
            Post
          </Button>
        </Box>
      </form>
      {posted ? 'Game has been posted' : null}
    </div>
  );
};

export default AddGame;
