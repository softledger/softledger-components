'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                       * Displays a Row a buttons, propertly spaced
                                                                                                                                       */
var ButtonBar = function ButtonBar(props) {return (
		_react2.default.createElement(_reactstrap.Row, { style: _extends({
					padding: "10px 20px" },
				props.style) },

			props.buttons.map(function (button, idx) {return (
					_react2.default.createElement('div', { key: idx, style: { paddingRight: "10px" } },
						button));})));};





ButtonBar.propTypes = {
	/**
                         * Array of buttons to show, in order
                         */
	buttons: _propTypes2.default.array.isRequired,
	/**
                                                 * Additional styles on the containing component
                                                 */
	style: _propTypes2.default.object };exports.default =


ButtonBar;