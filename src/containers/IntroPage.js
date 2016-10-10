import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FormLocationStart from '../components/FormLocationStart'
import { setLocationStart } from '../actions/location';
import { locationModel } from '../models/location';

class IntroPage extends Component {
  static propTypes = {
    // Injected by React Redux
    currentLocation: locationModel,
    setLocationStart: PropTypes.func.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    const { setLocationStart, currentLocation } = this.props
    return (
      <div>
        <FormLocationStart currentLocation={currentLocation}
                           onChange={(location) => setLocationStart(location)} />
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
