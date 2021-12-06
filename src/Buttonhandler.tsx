import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import store from './Datastore';
import {observer} from "mobx-react";

function Buttonhandler() {

    return (
    <Stack spacing={2} direction="row" style={{
        width:'75%',
        margin: 'auto',
        marginTop: '2rem',}}>
      <Button variant="contained" onClick={() => window.location.reload()} style ={{backgroundColor:'black', width:'45%'}}>New Game</Button>
      <Button variant="contained" onClick={store.isSolved} style ={{backgroundColor:'black', width:'45%'}}>Check Board</Button>
    </Stack>
  );
}

export default observer(Buttonhandler)