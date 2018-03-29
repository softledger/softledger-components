'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'reactstrap';

/**
 * Displays a Card with a header and body
 */
const CardValue = ({big, Header, Body, style}) =>  {
	const getStyle = () => big ? {} : {padding: ".25rem"};

	const renderHeader = Header => {
		if(Header) {
			return (
				<CardHeader style={getStyle()}>
					{Header}
				</CardHeader>
			);
		}
	}
	return (
		<Card 
			style={{style}}
		>
			{renderHeader(Header)}
			<CardBody style={getStyle()}>
				{Body}
			</CardBody>
		</Card>
	);
}

CardValue.propTypes = {
	/**
	 * Text or JSX to display in the heaader
	 */
	Header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/**
	 * Text or JSX to display in the body
	 */
	Body: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/**
	 * Set true will pad header and body with extra space
	 */
	big: PropTypes.bool,
	/**
	 * Extra styles to apply to container
	 */
	style: PropTypes.object
}

CardValue.defaultProps = {
	big: false 
}

export default CardValue;