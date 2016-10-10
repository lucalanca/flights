import { SET_LOCATION_START, SET_CURRENT_LOCATION } from '../actions/location';

const location = (state = {
  start: undefined,
  current: undefined
}, { type, payload }) => {
	if (type === SET_LOCATION_START) {
		return Object.assign({}, state, { start: payload });
	}

	if (type === SET_CURRENT_LOCATION) {
		return Object.assign({}, state, { current: payload });
	}

	return state;
}

export default location
