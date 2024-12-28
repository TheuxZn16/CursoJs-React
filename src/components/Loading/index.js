import React from 'react';
import PropTypes from 'prop-types';
import { Conteiner } from './styled';

function Loading({ isLoading = false }) {
	if (!isLoading) return <></>;
	return (
		<Conteiner>
			<div />
			<span>Carregando...</span>
		</Conteiner>
	);
}

Loading.propTypes = {
	isLoading: PropTypes.bool,
};
export default Loading;
