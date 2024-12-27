import React, { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Form } from './styled';
import { Conteiner } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';

function Login(props) {
	const dispatch = useDispatch();

	const prevPath = get(props, 'location.state.prevPath', '/');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		const formErrors = [];

		if (!isEmail(email)) {
			formErrors.push('Email inválido');
		}
		if (password.length < 6 || password.length > 255) {
			formErrors.push('Senha inválida');
		}
		if (formErrors.length > 0) {
			formErrors.forEach((err) => toast.error(err));
			return;
		}

		dispatch(actions.loginRequest({ email, password, prevPath }));
	}

	return (
		<Conteiner>
			<h1> Login </h1>

			<Form onSubmit={handleSubmit}>
				<label htmlFor="email">
					Email:
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Digite seu email"
					/>
				</label>
				<label htmlFor="password">
					Senha:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Digite sua senha"
					/>
				</label>
				<button type="submit">Enviar</button>
			</Form>
		</Conteiner>
	);
}

export default Login;
