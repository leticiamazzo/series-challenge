import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main'
import Serie from './pages/serie';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/series/:id' component={Serie} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
