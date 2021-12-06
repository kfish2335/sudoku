import React, {useState} from 'react';
import store from './Datastore';
import {observer} from "mobx-react";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import './App.css';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';


interface Iteminfo {
    x: number;
    y: number;
    num: number;
  }

function Item(props: Iteminfo) {
    const {x, y, num} = props;
    let left = '1rem'
    let right = '1rem'
    let top = '1rem'
    let bottom = '1rem'
    let disable = true;
    let display: any = num.toString();
    /** logic for borders */
    if (x == 3 || x == 6){ top= '0.3rem solid';}
    else if (x == 2|| x == 5){bottom = '0.3rem solid';}
    if (y == 3 || y == 6){left = '0.3rem solid';}
    else if (y == 2|| y == 5){right = '0.3rem solid';}
    /** logic for input */
    if (num == 0){
        disable = false ;
        display = null;
    }
    /** save player input */
    function handleChange(e: any) {
        store.Game[x][y] = e.target.value;
        console.log(store.Game)
    }

    return (
        <TextField
            disabled = {disable}
            color="secondary"
            type="number"
            onChange={handleChange}
            defaultValue={display}
            style={{
                width: '10%',
                height: '10%',
                borderLeft: left,
                borderRight: right,
                borderTop: top,
                borderBottom: bottom,
                borderColor: "black",
                
            }}
            inputProps={{
                style: { 
                fontWeight: '700',
                fontSize: '100%',   
                    
            }
            }}
        />
    );
}

export default observer(Item);