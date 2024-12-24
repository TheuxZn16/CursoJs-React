import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoutes';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

function Routes() {
	return (
		<Switch>
			<MyRoute exact path="/" component={Login} />
			<MyRoute path="*" component={Page404} />
		</Switch>
	);
}
export default Routes;