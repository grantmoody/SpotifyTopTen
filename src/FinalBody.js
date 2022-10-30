import './App.css';
import React, { useState } from 'react';
import { request } from 'express';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {RequestAccessToken, SpotifyRequestAPI} from './SpotifyRequestAPI';
import { Button } from '@mui/material';

function FinalBody() {
    const params = new URLSearchParams(window.location.search);
    let access_token = params.get("access_token");

    var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };
    request.get(options, function (error, response, body) {
        console.log(body);
    });

    async function onSubmitToken(access_token) {
        let tracksJson = await SpotifyRequestAPI("tracks", access_token);
        let artistsJson = await SpotifyRequestAPI("artists", access_token);
        let tracks = [...tracksJson.items].map(function (val) {
            return val.name;
        });
        let artists = [...artistsJson.items].map(function (val) {
            return val.name;
        });

        return [tracks, artists]
    }

    let trackAndArtists = onSubmitToken(access_token);
    let tracks = trackAndArtists[0]
    let artists = trackAndArtists[1]

    return (
        <></>
            // <div>
            //     <div className="splitcolumns">
            //         <div>
            //             <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            //                 Songs
            //             </Typography>
            //             <List>
            //                 {tracks.map((name) => (
            //                     <ListItem>
            //                         <ListItemText
            //                             primary={name}
            //                         />
            //                     </ListItem>
            //                 ))}
            //             </List>
            //         </div>
            //         <div>
            //             <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            //                 Artists
            //             </Typography>
            //             <List>
            //                 {artists.map((name) => (
            //                     <ListItem>
            //                         <ListItemText
            //                             primary={name}
            //                         />
            //                     </ListItem>
            //                 ))}
            //             </List>
            //         </div>
            //     </div>
            // </div>
    );
}

export default FinalBody;
