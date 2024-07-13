

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'rebeccapurple', boxShadow: 3 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Product Management
            </Typography>
            <Button color="inherit" component={Link} to="/" sx={{ mx: 1, textTransform: 'none' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/add" sx={{ mx: 1, textTransform: 'none' }}>
              Add
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;