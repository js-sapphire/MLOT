import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, themes } from '@stardust-ui/react';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './context/AppContext';

ReactDOM.render(
    <Provider theme={themes.fontAwesome}>
        <AppProvider>
            <App />
        </AppProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
