import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoutes';

import Login from '../pages/Login';
import Alunos from '../pages/Alunos';
import Aluno from '../pages/Aluno';
import Registros from '../pages/Registros';
import Fotos from '../pages/Fotos';
import Page404 from '../pages/Page404';

function Routes() {
	return (
		<Switch>
			<MyRoute exact path="/" component={Alunos} isClosed={false} />
			<MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
			<MyRoute exact path="/aluno" component={Aluno} isClosed />
			<MyRoute exact path="/fotos/:id" component={Fotos} isClosed={false} />
			<MyRoute exact path="/login" component={Login} isClosed={false} />
			<MyRoute exact path="/register" component={Registros} isClosed={false} />
			<MyRoute path="*" component={Page404} />
		</Switch>
	);
}
export default Routes;
