'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                       * Displays a Card with a header and body
                                                                                                                                       */
var CardValue = function CardValue(_ref) {var big = _ref.big,Header = _ref.Header,Body = _ref.Body,style = _ref.style;
	var getStyle = function getStyle() {return big ? {} : { padding: ".25rem" };};

	var renderHeader = function renderHeader(Header) {
		if (Header) {
			return (
				_react2.default.createElement(_reactstrap.CardHeader, { style: getStyle() },
					Header));


		}
	};
	return (
		_react2.default.createElement(_reactstrap.Card, {
				style: { style: style } },

			renderHeader(Header),
			_react2.default.createElement(_reactstrap.CardBody, { style: getStyle() },
				Body)));



};

CardValue.propTypes = {
	/**
                         * Text or JSX to display in the heaader
                         */
	Header: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	/**
                                * Text or JSX to display in the body
                                */
	Body: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	/**
                                * Set true will pad header and body with extra space
                                */
	big: _propTypes2.default.bool,
	/**
                                 * Extra styles to apply to container
                                 */
	style: _propTypes2.default.object };


CardValue.defaultProps = {
	big: false };exports.default =


CardValue;