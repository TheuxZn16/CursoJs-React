import React from 'react';
import { Conteiner } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';
import * as exampleActions from '../../store/modules/example/actions';

function Login() {
	React.useEffect(() => {});

	const dispatch = useDispatch();

	function handleClick(e) {
		e.preventDefault();

		dispatch(exampleActions.clicaBotaoRequest());
	}

	return (
		<Conteiner>
			<h1> Ola </h1>
			<p> Lorem Ipson Idolor </p>
			<button type="button" onClick={handleClick}>
				CLIQUE
			</button>
		</Conteiner>
	);
}

export default Login;
