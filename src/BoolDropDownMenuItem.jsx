'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Drop Down Menu Item which is toggled as either on/off on click
 * Component is stateless, so toggle is handled up
 */
const BoolDropDownMenuItem = ({text, value, onToggle}) => (
	<DropdownItem onClick={() => onToggle(text)}>
		<FontAwesomeIcon icon={value ? "times" : "plus"} />
    <span style={{paddingLeft:"5px",paddingRight:"5px"}}>&#124;</span>
    {text}
  </DropdownItem>
)

BoolDropDownMenuItem.propTypes = {
	/**
	 * Current value
	 */
	value: PropTypes.bool,
	/**
	 * Menu Item Text
	 */
	text: PropTypes.string.isRequired,
	/**
	 * Function to toggles the value
	 */
	onToggle: PropTypes.func.isRequired
};

export default BoolDropDownMenuItem;