import './App.css';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import {SpotifyRequestAPI} from './SpotifyRequestAPI';
import { client_id, redirect_uri } from './AuthorizationConfig';

function InitialBody(props) {
    const [usertoken, setusertoken] = useState('');

    var state = "abcdefghijklmnop";
    var scope = 'user-top-read';
    var searchParams = new URLSearchParams({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
    })

    async function onSubmitToken() {
        let tracksJson = await SpotifyRequestAPI("tracks", usertoken);
        let artistsJson = await SpotifyRequestAPI("artists", usertoken);
        props.settracks([...tracksJson.items].map(function (val) {
            return val.name;
        }));
        props.setartists([...artistsJson.items].map(function (val) {
            return val.name;
        }));
        props.setusersearched(true);
    }
    return (
        <>
            <div className='enter-button'>
                <Button variant="contained" size="large" href={"http://localhost:3000/login"}
                >
                    Login
                </Button>
            </div>
        </>
    );
}

export default InitialBody;
