'use strict';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pads texts with zeroes ('0')
 * * Can be text or integer
 * * If value.length > pad, no zeroes are added
 * * if value is null then '--' is displayed
 */
const ZeroPad = ({value, pad}) => {
	const transform = (v, p) => {
    if(!v) return '--';
		if(v.length >= p) return v;
		let zeroes = '0'.repeat(p);
		return (zeroes + v).slice(-1 * p);
	}

  return <span>{transform(value, pad)}</span>
}

ZeroPad.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	pad: PropTypes.number.isRequired
}

export default ZeroPad;