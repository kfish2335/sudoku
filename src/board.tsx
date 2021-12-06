import React, {useState} from 'react';
import store from './Datastore';
import {observer} from "mobx-react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function Board() {
    interface Iteminfo {
        x: number;
        y: number;
        num: number;
      }
   
    /** Single cell */
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
                    fontSize: '50px',    
                    
                }}}
                InputProps={{ inputProps: { min: 1, max: 9 } }}
            
            />
        );
    }
    function row(y:[], x:number){
        const obj = []
        for(let i = 0; i < y.length; i++){
            obj.push(Item({x:x, y:i , num: y[i]}))
        }
        return(<Stack direction="row">{obj}</Stack>)
    }
    
    return (
      <Stack direction="column"
      style={{
            width:'75%',
            margin: 'auto',
            marginTop: '2rem',
    }}>
        {store.puzzle.map((x: [], index: number)=> (row(x, index)))}
      </Stack>
    );
    }

export default observer(Board);