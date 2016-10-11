import {
    SET_LOCATION_START,
    SET_LOCATION_FINISH,
    SET_CURRENT_LOCATION
} from '../actions/location';

const location = (state = {
  start: undefined,
  finish: undefined,
  current: undefined
}, { type, payload }) => {
	if (type === SET_LOCATION_START) {
		return Object.assign({}, state, { start: payload });
	}

    if (type === SET_LOCATION_FINISH) {
		return Object.assign({}, state, { finish: payload });
	}

	if (type === SET_CURRENT_LOCATION) {
		return Object.assign({}, state, { current: payload });
	}

	return state;
}

export default location
