import React from 'react';
import { makeStyles } from '@mui/styles';

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.appContainer} />
    )
}

const useStyles = makeStyles((theme) => (
    {
        appContainer: {
            marginBottom: theme.appBarXSHeight,
            [theme.breakpoints.up('sm')]: {
                marginBottom: theme.appBarRegularHeight,
            },
        }
    }));

export default App;