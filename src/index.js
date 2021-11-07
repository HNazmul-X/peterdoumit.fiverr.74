import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <div id="cm-cursor"></div>
    </React.StrictMode>,
    document.getElementById("root"),
);
