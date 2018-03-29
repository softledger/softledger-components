'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DateFormat = ({date, format}) => (
	<span>
		{date ? moment(date).format(format || 'MM/DD/YYYY') : '--'}
	</span>
);

DateFormat.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]),
	format: PropTypes.string
}

export default DateFormat;