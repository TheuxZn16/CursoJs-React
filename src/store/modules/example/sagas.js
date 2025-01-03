import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});

function* exampleRequest() {
	try {
		yield call(request);
		yield put(actions.clicaBotaoSuccess());
	} catch (e) {
		toast.error('Deu erro');
		yield put(actions.clicaBotaoFailure());
	}
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
