import React from 'react';
import {Route} from 'react-router';

import App from './App';
import Contact from './components/pages/Contact';


export default (
    <Route path="/" component={App}>
        <Route path="/Contact" component={Contact}/>
    </Route>
)