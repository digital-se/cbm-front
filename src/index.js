import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import './i18n';

import configureStore from './store/store';

import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ReactKeycloakProvider authClient={keycloak}>
            <App />
        </ReactKeycloakProvider>
    </Provider>,
    document.getElementById('app')
);
