import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  return (
    <AppBar position="static" sx={{background:'white', marginBottom: '50px'}}>
      <Toolbar>
        
        <Typography variant="h3" sx={{color:'#4d2b7b'}} fontWeight={'bold'}>avua</Typography>
      </Toolbar>
    </AppBar>
  )
}
