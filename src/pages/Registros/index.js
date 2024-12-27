import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import history from '../../services/history';
import { get } from 'lodash';
import isEmail from 'validator/lib/isEmail';
import { Form } from './styled';
import { Conteiner } from '../../styles/GlobalStyles';

function Registros() {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		const formErrors = [];

		if (nome.length < 3 || nome.length > 255) {
			formErrors.push('Campo nome deve ter entre 3 e 255 caracteres');
		}
		if (!isEmail(email)) {
			formErrors.push('Email inválido');
		}
		if (password.length < 6 || password.length > 255) {
			formErrors.push('Campo senha deve ter entre 6 e 255 caracteres');
		}
		if (formErrors.length > 0) {
			formErrors.forEach((err) => toast.error(err));
			return;
		}

		try {
			await axios.post('/users', {
				nome,
				password,
				email,
			});
			toast.success('Você fez seu cadastro');
			history.push('/login');
		} catch (e) {
			const errors = get(e, 'response.data.errors', []);

			if (errors) {
				errors.map((error) => toast.error(error));
			}
		}
	}

	return (
		<Conteiner>
			<h1> Crie sua conta </h1>

			<Form onSubmit={handleSubmit}>
				<label htmlFor="nome">
					Nome:
					<input
						type="text"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
						placeholder="Nome"
					/>
				</label>
				<label htmlFor="email">
					Email:
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>
				</label>
				<label htmlFor="password">
					Senha:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Senha"
					/>
				</label>

				<button type="submit">Criar um perfil</button>
			</Form>
		</Conteiner>
	);
}

export default Registros;
