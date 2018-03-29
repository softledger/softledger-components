'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'reactstrap';

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
	Header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	Body: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	big: PropTypes.bool,
	style: PropTypes.object
}

export default CardValue;