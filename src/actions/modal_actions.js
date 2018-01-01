import { SIGN_UP_MODAL, LOG_IN_MODAL, CLOSE_MODAL } from './types'

export const close_modal = () => {
	return {
		type: CLOSE_MODAL,
		payload: CLOSE_MODAL
	}
};

export const login_modal = () => {
	return {
		type: LOG_IN_MODAL,
		payload: LOG_IN_MODAL
	}
};

export const signup_modal = () => {
	return {
		type: SIGN_UP_MODAL,
		payload: SIGN_UP_MODAL
	}
};