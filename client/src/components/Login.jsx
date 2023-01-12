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

{
  /* <Typography variant="h1">This is Login</Typography>; */
}
const Login = ({ user, setUser, setIsLoggedIn }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const clickHandler = (e) => {
    setIsLoggedIn(true);
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
            {isSignup ? 'Register' : 'Login'}
          </Typography>
          <FormControl margin="normal">
            <InputLabel>
              <Typography>Username:</Typography>
            </InputLabel>
            <Input
              required
              type={'text'}
              onChange={(e) => setUser(e.target.value)}
            />
          </FormControl>
          {isSignup && (
            <FormControl margin="normal">
              <InputLabel> Email: </InputLabel>
              <Input
                type={'email'}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          )}
          <FormControl margin="normal">
            <InputLabel> Password: </InputLabel>
            <Input
              type={'password'}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {user.length === 0 || password.length === 0 ? (
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="primary"
              onClick={clickHandler}
            >
              {isSignup ? 'Register' : 'Login'}
            </Button>
          ) : (
            <Link to="/gamesfeed">
              <Button
                sx={{ marginTop: 3, borderRadius: 3 }}
                variant="contained"
                color="primary"
                onClick={clickHandler}
              >
                {isSignup ? 'Register' : 'Login'}
              </Button>
            </Link>
          )}
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isSignup ? 'Back to Login' : 'Go to Register'}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
