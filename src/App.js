import './App.css';

import VerticalLinearStepper from "./components/stepper";
import {Card} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import * as React from 'react';
import { appTheme } from "./themes/theme";
import Button from "@mui/material/Button";
import RequirementList from "./components/requirement-list";
import {HomePage} from "./components/homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from "./components/main";
import Status from "./components/status";

function App() {


  return (
      <Router>
      <ThemeProvider theme={appTheme}>
    <div className="App solution-box">
      <header className="App-header">
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <div className="site-identity">
          <a className="header-link" href="#"><img className="image-box" src={process.env.PUBLIC_URL + '/logo.png'} alt="Site Name"/><span>Easy Licence Portal</span><img className="image-box-coc" src={process.env.PUBLIC_URL + '/coc-logo.svg'} alt="Site Name"/></a></div>
      </header>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="status/cc37dde0-0aee-11ed-861d-0242ac120002" element={<Status/>}/>
      </Routes>

    </div>
      </ThemeProvider>
      </Router>
  );
}

export default App;
