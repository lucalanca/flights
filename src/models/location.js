import { PropTypes } from 'react';

export const locationModel = PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
});
