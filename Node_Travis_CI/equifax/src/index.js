import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './components/panel.component';

window.attachApp = (viewName, postUrl, data, auth) => {
    let app;
    switch (viewName) {
        case "equifax": {
            app = (<Panel data={data} postUrl={postUrl} auth={auth} />);
            break;
        }
        default: {
            app = (<h2>Oops I couldn´t load nothing</h2>);
            break;
        }
    }
    ReactDOM.render(app, document.getElementById('content'));
}