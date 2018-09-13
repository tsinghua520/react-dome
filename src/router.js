import React from 'react';
import { Route } from 'react-router';
import App from './ex/ex1';
import App2 from './ex/ex2';

export default (
    <div>
        <Route path="/app" component={App} />
        <Route path="/app2" component={App2} />
    
    </div>
);