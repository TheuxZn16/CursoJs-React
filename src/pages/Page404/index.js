import React from 'react';
import { Conteiner } from '../../styles/GlobalStyles';
import { FaRobot } from 'react-icons/fa';

function Page404() {
	return (
		<Conteiner>
			<h1>Essa página não existe</h1>
			<p>
				Error 404 <FaRobot />
			</p>
		</Conteiner>
	);
}

export default Page404;
