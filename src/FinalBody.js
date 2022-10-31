import './App.css';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function FinalBody() {
    const params = new URLSearchParams(window.location.search);
    let access_token = params.get("access_token");

    const [tracks, settracks] = useState([]);
    const [artists, setartists] = useState([]);
    const [searched, setsearched] = useState(false);
    const headers = { "Authorization": "Bearer " + access_token }
    if (!searched) {
        setsearched(true);
        fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', { headers })
            .then(response => response.json())
            .then(data => settracks([...data.items].map(function (val) {
                return val.name;
            }))).catch(error => setsearched(false))

        fetch('https://api.spotify.com/v1/me/top/artists?limit=10', { headers })
            .then(response => response.json())
            .then(data =>
                setartists([...data.items].map(function (val) {
                    return val.name;
                }))
            ).catch(error => setsearched(false))
    }

    return (
        <div>
            <div className="splitcolumns">
                <div>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Songs
                    </Typography>
                    <List>
                        {tracks.map((name) => (
                            <ListItem key={name}>
                                <ListItemText
                                    primary={name}
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Artists
                    </Typography>
                    <List>
                        {artists.map((name) => (
                            <ListItem key={name}>
                                <ListItemText
                                    primary={name}
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        </div>
    );
}

export default FinalBody;
