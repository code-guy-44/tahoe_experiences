import React, { useContext} from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, DateRange } from '@mui/icons-material';
import Hamburger from 'hamburger-react';
import { makeStyles, useTheme } from '@mui/styles';
import { AppBarContext }from '../contexts/appBar';

const NavBar = () => {
    const classes = useStyles();
    const theme = useTheme()
    const notMobile = useMediaQuery(theme.breakpoints.up('sm'));
    const { appBarState, setAppBarState} = useContext(AppBarContext);
    const { toggled } = appBarState

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" classes={{root: classes.appBar}}>
                <Toolbar variant='regular' classes={{ root: classes.toolBar, gutters: classes.toolBarGutters}}>
                    <IconButton
                        size="medium"
                        edge="start"
                        aria-label={{ fontSize: '100px' }}
                    >
                        <Hamburger
                            toggle={() => setAppBarState({...appBarState, toggled: !toggled})}
                            toggled={toggled}
                            size={notMobile ? 27 : 25} 
                            color='black'
                        />
                    </IconButton>

                    <Typography color="black" variant="h6" component="div" sx={{ textAlign: 'center', flexGrow: 1, fontFamily: theme.titleText.fontFamily, fontSize: theme.titleText.fontSize }}>
                        SAILORAMA
                    </Typography>

                    <IconButton
                        size="large"
                        edge="end"
                        style={{ color: 'black', marginRight: '10px' }}
                        aria-label="menu"
                    >
                        <DateRange />
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        style={{ color: 'black' }}
                        aria-label="menu"
                    >
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const useStyles = makeStyles((theme) => (
    {
        titleText: {
            fontFamily: theme.titleText.fontFamily + "!important"
        },
        appBar: {
            backgroundColor: 'white !important',
            height: theme.appBarXSHeight,
            [theme.breakpoints.up('sm')]: {
                height: theme.appBarRegularHeight,
            },
        },
        toolBar: {
            backgroundColor: 'white !important',
            minHeight: theme.appBarXSHeight + '!important',
            [theme.breakpoints.up('sm')]: {
                minHeight: theme.appBarRegularHeight + 'important',
           },
        }
    }
))

export default NavBar
