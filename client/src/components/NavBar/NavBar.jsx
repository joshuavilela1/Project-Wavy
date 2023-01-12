import axios from 'axios';
import React from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
} from '@mui/material';
import GamesIcon from '@mui/icons-material/Games';
import { Link } from 'react-router-dom';
import DrawerComp from './DrawerComp.jsx';

const { useState, useEffect } = React;

const NavBar = ({ user, isLoggedIn, setIsLoggedIn }) => {
  const [value, setValue] = useState('one');

  return (
    <AppBar sx={{ background: '#2E5EAA' }}>
      <Toolbar>
        <Grid sx={{ placeItems: 'center' }} container>
          <Grid item xs={2}>
            <Typography>
              <GamesIcon />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              textColor="inherit"
              indicatorColor="secondary"
              onChange={(e, val) => setValue(val)}
              value={value}
            >
              <Tab
                value="one"
                label="Games Leaderboard"
                to="/gamesfeed"
                component={Link}
              />
              <Tab
                value="two"
                label="Ranking Games"
                to="/rankings"
                component={Link}
              />
              <Tab
                value="three"
                label="Post a new game"
                to="/addgame"
                component={Link}
              />
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Box display="flex">
              {isLoggedIn ? (
                <Typography variant="h4" sx={{ marginLeft: 'auto' }}>
                  Hello, {user}
                </Typography>
              ) : null}
              {isLoggedIn ? (
                <Link to="/">
                  <Button
                    sx={{ marginLeft: 3 }}
                    variant="contained"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Sign Out
                  </Button>
                </Link>
              ) : null}
            </Box>
          </Grid>
        </Grid>
        {/* <DrawerComp /> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
