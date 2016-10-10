import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../actions'
import { setCurrentLocation } from '../actions/location';

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  constructor(props) {
      super(props);
      this.askForCurrentLocation();
  }

  askForCurrentLocation () {
    const { setCurrentLocation } = this.props
    navigator.geolocation.getCurrentPosition(
        (position) => setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }),
        () => {

        }
    );
  }

  handleDismissClick = e => {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage
})

export default connect(mapStateToProps, {
  resetErrorMessage,
  setCurrentLocation
})(App)
