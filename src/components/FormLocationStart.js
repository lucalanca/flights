import React, { Component, PropTypes } from 'react'
import Geosuggest from 'react-geosuggest';
import { locationModel } from '../models/location';

import AIRPORTS from '../models/airports';

const AIRPORTS_FIXTURES = AIRPORTS.map(a => ({
	label: `${a.city}, ${a.country}`,
	location: {
		lat: a.lat,
		lng: a.lng
	}
}))

const currentLocationToFixtures = (currentLocation) => {
	if (!currentLocation) {
		return [];
	}

	return [{
		label: 'Current Location',
		location: { lat: currentLocation.latitude, lng: currentLocation.longitude }
	}];
}

const suggestionToLocation = (suggestion) => {
	return {
		latitude: suggestion.location.lat,
		longitude: suggestion.location.lng,
		label: suggestion.label,
		placeId: suggestion.placeId
	}
}

export default class FormLocationStart extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
	currentLocation: locationModel
  }

  getInputValue = () => {
    return this.refs.input.value
  }

  onSuggestSelect (suggestion) {
	  this.props.onChange(suggestionToLocation(suggestion));
  }


  render() {
	const { currentLocation } = this.props;
	// const fixtures = currentLocationToFixtures(currentLocation);
    return (
      <div>
        <p>Type your location and hit 'Go':</p>
		<Geosuggest onSuggestSelect={this.onSuggestSelect.bind(this)}
		            fixtures={AIRPORTS_FIXTURES}
					types={['(cities)']}/>

		{currentLocation && <pre>
			currentLocation:
			{JSON.stringify(currentLocation)}
		</pre>}
      </div>
    )
  }
}
