import { fabClasses } from '@mui/material';
import React, { createContext, useState} from 'react';

const defaultState = {
    toggled: false
};

export const AppBarContext = createContext({
    appBarState: defaultState,

});

const AppBarContextProvider = (props) => {
    const [appBarState, setAppBarState] = useState(defaultState)

    const providerValue = {
        appBarState,
        setAppBarState
    }

    return (
        <AppBarContext.Provider value={providerValue}>
            {props.children}
        </AppBarContext.Provider>
    )
}

export default AppBarContextProvider;