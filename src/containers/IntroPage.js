import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FormLocationStart from '../components/FormLocationStart'
import { setLocationStart, setLocationFinish } from '../actions/location';
import { locationModel } from '../models/location';

import InputAirport from '../components/InputAirport';

class IntroPage extends Component {
  static propTypes = {
    // Injected by React Redux
    currentLocation: locationModel,
    setLocationStart: PropTypes.func.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    const { setLocationStart, setLocationFinish, currentLocation } = this.props
    return (
      <div>
         <div style={{width: '300px', display: 'inline-block'}}>
             <InputAirport onChange={location => setLocationStart(location)}/>
         </div>
         <div style={{width: '500px', marginLeft: '16px', display: 'inline-block'}}>
             <InputAirport onChange={location => setLocationFinish(location)}/>
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    currentLocation: state.location.current
})

export default connect(mapStateToProps, {
  setLocationStart
})(IntroPage)
