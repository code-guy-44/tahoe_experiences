import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from "react-dom";
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import App from './components/App';
import AppBarContext from './contexts/appBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
import './index.css'

const rootElement = document.getElementById("root");

render(

    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <AppBarContext>
        <Navbar />
        <App />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="calendar" element={<Calendar />} /> */}
        </Routes>
      </AppBarContext>
        
      </BrowserRouter>
    </ThemeProvider>,
  rootElement
);




