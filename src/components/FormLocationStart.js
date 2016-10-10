import React, { Component, PropTypes } from 'react'
import Geosuggest from 'react-geosuggest';
import { locationModel } from '../models/location';

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
	const fixtures = currentLocationToFixtures(currentLocation);
    return (
      <div>
        <p>Type your location and hit 'Go':</p>
		<Geosuggest onSuggestSelect={this.onSuggestSelect.bind(this)}
		            fixtures={fixtures}
					types={['(cities)']}/>

		{currentLocation && <pre>
			currentLocation:
			{JSON.stringify(currentLocation)}
		</pre>}
      </div>
    )
  }
}
