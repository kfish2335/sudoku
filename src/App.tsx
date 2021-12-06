import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Board from './board';
import Container from '@mui/material/Container';
import Buttonhandler from './Buttonhandler';
import store from './Datastore';
import {observer} from "mobx-react";



function App() {
  function Mainpage(){
    return (
      <Container style ={{width: '100%',
                          height: '100%',
                          margin: 'auto'
                        }}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  style ={{backgroundColor: 'black'}}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Sudoku
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
        <Board />
        <Buttonhandler />
      </Container>
    );
  }
  return (
    <Container style ={{width: '100%',
                          height: '100%',
                          margin: 'auto'
                        }}>
                          {store.puzzle == null ? 'Loading' : Mainpage()}
      </Container>
  );
}

export default observer(App);
