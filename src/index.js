import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode cla>
        <GoogleOAuthProvider clientId="615006381878-q2u1t7m63ohll1r0soumr3e3dvbgeo81.apps.googleusercontent.com">
            <App/></GoogleOAuthProvider>
    </React.StrictMode>
);

