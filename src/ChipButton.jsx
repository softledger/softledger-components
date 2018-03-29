'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Displays a Pill shaped Button with text and an Icon 
 */
const ChipButton = ({text, onClick, iconClass, style}) => (
	<Badge pill color="secondary"
		style={style || {}}>
		<div style={{padding: "5px"}}
				onClick={onClick}>			
			{text}
			<FontAwesomeIcon
				icon={iconClass}
				style={{marginLeft: "5px"}}
			/>
		</div>
	</Badge>
);		

ChipButton.propTypes = {
	/**
	 * Can be text or jsx
	 */
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]).isRequired,
	/**
	 * Function to call when clicked
	 */
	onClick: PropTypes.func,
	/**
	 * FontAwesome Icon class name
	 * (make sure font awesome library is loaded)
	 */
	iconClass: PropTypes.string,
	/**
	 * Additional styles to add to container
	 */
	style: PropTypes.object
}

export default ChipButton;