import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, DateRange } from '@mui/icons-material';
import { makeStyles, useTheme } from '@mui/styles';

export default function ButtonAppBar() {
    const classes = useStyles();
    const theme = useTheme()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='transparent'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 3 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: theme.titleText.fontFamily, fontSize: theme.titleText.fontSize }}>
                        SAILORAMA
                    </Typography>

                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                    >
                        <DateRange />
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
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
        }
    }));