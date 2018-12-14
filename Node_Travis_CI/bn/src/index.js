import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.attachApp = (viewName, url, data, authorization) => {
    let app;
    switch (viewName) {
        case "bn": {
            app = (<App viewName={viewName} url={url} data={data} authorization={authorization} />)
            break;
        }
        default: {
            app = (<h2>Oops I couldn´t load nothing</h2>);
            break;
        }
    }
    ReactDOM.render(app, document.getElementById('content'));
}