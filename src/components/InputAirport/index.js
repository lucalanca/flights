import React, { Component, PropTypes } from 'react'
import uniqBy from 'lodash.uniqby';

import Geosuggest from 'react-geosuggest';
import Autocomplete from 'react-autocomplete'

import './style.css';

import AIRPORTS from '../../models/airports';

const AIRPORTS_FIXTURES = uniqBy(AIRPORTS.map(a => ({
	label: `${a.city}, ${a.country}`,
	latitude: a.lat,
	longitude: a.longitude,
	code1: a.code1,
	code2: a.code2
})), 'label').slice(0, 100);

export function matcher (item, query) {
  return item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1;
}

export default class InputAirport extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
	  super(props);
	  this.state = {
		  value: '',
		  open: false
	  }
  }

  onChange (value) {
	  console.log('onChange', value);
	  this.setState({ value: value })
  }

  onSelect (value, item) {
	  console.log('onSelect', value, item);
	  this.setState({ value, open: false })
	  this.props.onChange(item);
  }

  render() {
    return (
      <div className="input-autocomplete">


		<Autocomplete
					  value={this.state.value}
				      inputProps={{name: "location-start", id: "location-start"}}
					  items={AIRPORTS_FIXTURES}
					  getItemValue={(item) => item.label}
			          shouldItemRender={matcher}
					  onChange={(event, value) => this.onChange(value)}
			          onSelect={(value, item) => this.onSelect(value, item)}
					  open={this.state.open}
			          renderItem={(item, isHighlighted) => (
			            <div
			              style={isHighlighted ? {backgroundColor: 'red'} : { backgroundColor: 'blue' }}
			              key={item.label}
			            >{item.label}</div>
			          )}
			        />
      </div>
    )
  }
}

// <Geosuggest onSuggestSelect={this.onSuggestSelect.bind(this)}
// 			fixtures={AIRPORTS_FIXTURES} />
