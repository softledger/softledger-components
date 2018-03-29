'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';

/**
 * Displays a Row a buttons, propertly spaced
 */
const ButtonBar = props => (
	<Row style={{
		padding: "10px 20px",
		...props.style
	}}>
		{props.buttons.map((button, idx) => (
			<div key={idx} style={{paddingRight: "10px"}}>
				{button}
			</div>
		))}
	</Row>
)

ButtonBar.propTypes = {
	/**
	 * Array of buttons to show, in order
	 */
	buttons: PropTypes.array.isRequired,
	/**
	 * Additional styles on the containing component
	 */
	style: PropTypes.object
}

export default ButtonBar;