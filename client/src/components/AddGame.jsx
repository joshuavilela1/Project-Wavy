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

const AddGame = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [url, setUrl] = useState('');
  const [posted, setPosted] = useState(false);

  useEffect(() => {}, []);

  const clickHandler = (e) => {
    const genreArray = [];
    genreArray.push(genre);
    e.target.reset();
    axios
      .post('/api/games', {
        name: name,
        genre: urlArray,
        image_url: url,
      })
      .then((response) => {
        console.log(response);
        setPosted(true);
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
          alignItems="center"
          justifyContent={'center'}
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{
            ':hover': {
              boxShadow: '10px 10px 20px #ccc',
            },
          }}
        >
          <Typography variant="h3" padding={3}>
            Post new game
          </Typography>
          <FormControl margin="normal">
            <InputLabel>
              <Typography>Game Name:</Typography>
            </InputLabel>
            <Input
              required
              type={'text'}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel> Genre: </InputLabel>
            <Input
              type={'text'}
              required
              onChange={(e) => setGenre(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel> Game Image URL: </InputLabel>
            <Input
              type={'text'}
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </FormControl>
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            type="submit"
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
