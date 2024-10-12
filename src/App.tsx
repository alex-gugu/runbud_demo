import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from 'react-router-dom';
import { ConsolePage } from './pages/ConsolePage';
import SetupPage from './pages/SetupPage';
import './App.scss';

function App() {
    return (
        <div data-component="App">
            <ConsolePage />
        </div>
    );
}

export default App;
