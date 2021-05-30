import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHooks from '../hooks';
import Main from '../pages/main';
import StepsProperties from '../pages/stepsProperties';

const Routes: React.FC = () => (
    <Switch>
        <AppHooks>
            <Route path="/" exact  component={Main} />
            <Route path="/steps/:uuid" component={StepsProperties} />
        </AppHooks>
    </Switch>
);

export default Routes;
