export const SET_LOCATION_START = 'SET_LOCATION_START'
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'

export const setLocationStart = (location) => ({
    type: SET_LOCATION_START,
	payload: location
})

export const setCurrentLocation = (location) => ({
    type: SET_CURRENT_LOCATION,
	payload: location
})
