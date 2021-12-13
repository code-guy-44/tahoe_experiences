import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
        </div>
    )
}

const backgroundImage = 'https://img.wallpapersafari.com/desktop/1680/1050/83/44/H2GEpD.jpg'

const useStyles = makeStyles((theme) => (
    {mainContainer: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
}));

export default LandingPage