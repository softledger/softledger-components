'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                           * Pads texts with zeroes ('0')
                                                                                                                                                                                           * * Can be text or integer
                                                                                                                                                                                           * * If value.length > pad, no zeroes are added
                                                                                                                                                                                           * * if value is null then '--' is displayed
                                                                                                                                                                                           */
var ZeroPad = function ZeroPad(_ref) {var value = _ref.value,pad = _ref.pad;
	var transform = function transform(v, p) {
		if (!v) return '--';
		if (v.length >= p) return v;
		var zeroes = '0'.repeat(p);
		return (zeroes + v).slice(-1 * p);
	};

	return _react2.default.createElement('span', null, transform(value, pad));
};

ZeroPad.propTypes = {
	value: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.number]),

	pad: _propTypes2.default.number.isRequired };exports.default =


ZeroPad;