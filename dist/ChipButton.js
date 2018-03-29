'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');
var _reactFontawesome = require('@fortawesome/react-fontawesome');var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                    * Displays a Pill shaped Button with text and an Icon 
                                                                                                                                                                                                                                    */
var ChipButton = function ChipButton(_ref) {var text = _ref.text,onClick = _ref.onClick,iconClass = _ref.iconClass,style = _ref.style;return (
		_react2.default.createElement(_reactstrap.Badge, { pill: true, color: 'secondary',
				style: style || {} },
			_react2.default.createElement('div', { style: { padding: "5px" },
					onClick: onClick },
				text,
				_react2.default.createElement(_reactFontawesome2.default, {
					icon: iconClass,
					style: { marginLeft: "5px" } }))));};





ChipButton.propTypes = {
	/**
                          * Can be text or jsx
                          */
	text: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]).
	isRequired,
	/**
              * Function to call when clicked
              */
	onClick: _propTypes2.default.func,
	/**
                                     * FontAwesome Icon class name
                                     * (make sure font awesome library is loaded)
                                     */
	iconClass: _propTypes2.default.string,
	/**
                                         * Additional styles to add to container
                                         */
	style: _propTypes2.default.object };exports.default =


ChipButton;