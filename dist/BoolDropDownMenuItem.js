'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');
var _reactFontawesome = require('@fortawesome/react-fontawesome');var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                    * Drop Down Menu Item which is toggled as either on/off on click
                                                                                                                                                                                                                                    * Component is stateless, so toggle is handled up
                                                                                                                                                                                                                                    */
var BoolDropDownMenuItem = function BoolDropDownMenuItem(_ref) {var text = _ref.text,value = _ref.value,onToggle = _ref.onToggle;return (
		_react2.default.createElement(_reactstrap.DropdownItem, { onClick: function onClick() {return onToggle(text);} },
			_react2.default.createElement(_reactFontawesome2.default, { icon: value ? "times" : "plus" }),
			_react2.default.createElement('span', { style: { paddingLeft: "5px", paddingRight: "5px" } }, '|'),
			text));};



BoolDropDownMenuItem.propTypes = {
	/**
                                    * Current value
                                    */
	value: _propTypes2.default.bool,
	/**
                                   * Menu Item Text
                                   */
	text: _propTypes2.default.string.isRequired,
	/**
                                               * Function to toggles the value
                                               */
	onToggle: _propTypes2.default.func.isRequired };exports.default =


BoolDropDownMenuItem;