'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _moment = require('moment');var _moment2 = _interopRequireDefault(_moment);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var DateFormat = function DateFormat(_ref) {var date = _ref.date,format = _ref.format;return (
		_react2.default.createElement('span', null,
			date ? (0, _moment2.default)(date).format(format || 'MM/DD/YYYY') : '--'));};



DateFormat.propTypes = {
	date: _propTypes2.default.oneOfType([
	_propTypes2.default.object,
	_propTypes2.default.string]),

	format: _propTypes2.default.string };exports.default =


DateFormat;