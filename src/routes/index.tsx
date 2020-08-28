import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import StepsProperties from '../pages/stepsProperties';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/steps/:uuid" component={StepsProperties} />
    </Switch>
);

export default Routes;
