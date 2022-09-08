import './App.css';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function FinalBody(props) {
    return (
        <>
            <div>
                        <div className = "splitcolumns">
                            <div>
                                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                    Songs
                                </Typography>
                                <List>
                                    {props.tracks.map((name) => (
                                        <ListItem>
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
                                    {props.artists.map((name) => (
                                        <ListItem>
                                            <ListItemText
                                                primary={name}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
            </div>
        </>
    );
}

export default FinalBody;
