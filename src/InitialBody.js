import './App.css';
import { Button } from '@mui/material';
import React from 'react';

function InitialBody() {
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
