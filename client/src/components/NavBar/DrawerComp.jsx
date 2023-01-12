import axios from 'axios';
import React from 'react';
import { Drawer, IconButton } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';

const { useState, useEffect } = React;

const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}></Drawer>

      <IconButton>
        <WidgetsIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
