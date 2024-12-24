import React from 'react';
import { Nav } from './styled';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
	const botaoClicado = useSelector(
		(state) => state.exampleReducer.botaoClicado,
	);
	return (
		<Nav>
			<Link to="/">
				<FaHome size={24} />
			</Link>
			<Link to="/login">
				<FaUserAlt size={24} />
			</Link>
			<Link to="/sair">
				<FaSignInAlt size={24} />
			</Link>
			{botaoClicado ? 'clicado' : 'não clicado'}
		</Nav>
	);
}

export default Header;
