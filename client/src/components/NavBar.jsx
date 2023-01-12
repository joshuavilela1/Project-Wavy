import axios from 'axios';
import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import GamesIcon from '@mui/icons-material/Games';
import { Link } from 'react-router-dom';

const { useState, useEffect } = React;

const NavBar = () => {
  const [value, setValue] = useState('one');

  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <Typography>
              <GamesIcon />
            </Typography>
          </Grid>
          <Grid item xs={7}>
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
// Hello I Am NavBar
// <List>
//   <ListItem>
//     <Link to="/gamesfeed">Games Leaderboard</Link>
//   </ListItem>
//   <ListItem>
//     <Link to="/Rankings">Rankings</Link>
//   </ListItem>
//   <ListItem>
//     <Link to="/addgame">Add a Game</Link>
//   </ListItem>
// </List>

export default NavBar;
