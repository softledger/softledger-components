'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

/**
 * Formats a date value consistently
 */
const DateFormat = ({date, format}) => (
	<span>
		{date ? moment(date).format(format || 'MM/DD/YYYY') : '--'}
	</span>
);

DateFormat.propTypes = {
	/**
	 * Can be a string, Date() or moment()
	 */
	date: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]).isRequired,
	/**
	 * Moment format specifier
	 */
	format: PropTypes.string
}

DateFormat.defaultProps = {
	format: 'MM/DD/YYYY'
}

export default DateFormat;