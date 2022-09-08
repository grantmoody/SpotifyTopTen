import './App.css';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';
import React, { useState } from 'react';
import SpotifyRequestAPI from './SpotifyRequestAPI';

function InitialBody(props) {
    const [usertoken, setusertoken] = useState('');
    async function onSubmitToken() {
        let tracksJson = await SpotifyRequestAPI("tracks", usertoken);
        let artistsJson = await SpotifyRequestAPI("artists", usertoken);
        props.settracks([...tracksJson.items].map(function(val){
            return val.name;
        }));
        props.setartists([...artistsJson.items].map(function(val){
            return val.name;
        }));
        props.setusersearched(true);
    }
    return (
        <>
            <br />
            <div className='token-text-field'>
                <TextField fullWidth id="filled-basic" label="Paste Token" variant="filled" onChange={(e) => setusertoken(e.target.value)}/>
            </div>
            <div className='enter-button'>
                <Button variant="contained" size="large" onClick={onSubmitToken}>
                    Enter
                </Button>
            </div>
            <br />
            <div className='link'>
                <a href="http://localhost:3000/TutorialBody">
                    Click for instructions to get token
                </a>
            </div>
        </>
    );
}

export default InitialBody;
