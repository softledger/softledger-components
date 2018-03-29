'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _moment = require('moment');var _moment2 = _interopRequireDefault(_moment);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                              * Formats a date value consistently
                                                                                                                                                                              */
var DateFormat = function DateFormat(_ref) {var date = _ref.date,format = _ref.format;return (
		_react2.default.createElement('span', null,
			date ? (0, _moment2.default)(date).format(format || 'MM/DD/YYYY') : '--'));};



DateFormat.propTypes = {
	/**
                          * Can be a string, Date() or moment()
                          */
	date: _propTypes2.default.oneOfType([
	_propTypes2.default.object,
	_propTypes2.default.string]).
	isRequired,
	/**
              * Moment format specifier
              */
	format: _propTypes2.default.string };


DateFormat.defaultProps = {
	format: 'MM/DD/YYYY' };exports.default =


DateFormat;