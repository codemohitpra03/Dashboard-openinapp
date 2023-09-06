import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode cla>
        <GoogleOAuthProvider clientId="615006381878-flapjob8o21e2ifiq8un3o16sar1o7d9.apps.googleusercontent.com">
            <App/></GoogleOAuthProvider>;
    </React.StrictMode>
);

