import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { Parallax, Background } from "react-parallax";


const LandingPage = () => {

    const classes = useStyles();
    const theme = useTheme();
    const image1 = 'https://storage.googleapis.com/production-dot5hosting-v1-0-5/485/225485/ThnFPbM7/36c55c0ae96544d8a637480e3527f7c0'

    return (
        <div className={classes.mainContainer}>
            <Parallax bgImage={image1} strength={500}>
                <div className={classes.image1}>
                    <div className={classes.insideStyles}>
                        <Typography color="white" variant="h6" component="div" sx={{ textAlign: 'center', flexGrow: 1, fontFamily: theme.titleText.fontFamily, fontSize: theme.titleText.fontSize }}>
                            Come Sail With Us and Shit
                        </Typography>   
                        <Button size='large' style={{color: 'white', border: '3px solid white'}} variant="outlined">
                            Book Now
                        </Button>
                    
                    </div>
                </div>
            </Parallax>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Map goes here
                </Grid>
            </Grid>

        </div>
    )
}

const backgroundImage = 'https://img.wallpapersafari.com/desktop/1680/1050/83/44/H2GEpD.jpg'

const useStyles = makeStyles((theme) => {

    return (
    {
        mainContainer: {
            textAlign: "center",
            padding: '0',
            [theme.breakpoints.up('sm')]: {
                padding: '0 28px',
            }
        },
        insideStyles: {
            position: "fixed",
            top: "60%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        },
        image1: {
            height: `calc(100vh - ${theme.appBarXSHeight})`,
            [theme.breakpoints.up('sm')]: {
                height: `calc(100vh - (${theme.appBarRegularHeight} + 28px))`,
            },
        }
    })});

export default LandingPage