'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');


var _ = require('./');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Button which, when clicked, displays a confirm modal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var
ConfirmButton = function (_React$Component) {_inherits(ConfirmButton, _React$Component);
	function ConfirmButton(props) {_classCallCheck(this, ConfirmButton);var _this = _possibleConstructorReturn(this, (ConfirmButton.__proto__ || Object.getPrototypeOf(ConfirmButton)).call(this,
		props));_this.






		toggle = function () {return _this.setState({
				isOpen: !_this.state.isOpen });};_this.


		onConfirm = function (e) {
			_this.setState({
				submitting: true });

			return _this.props.onConfirm().
			then(function () {return _this.setState({
					submitting: false,
					isOpen: false });});

		};_this.

		renderButton = function (buttonClass) {
			if (_this.state.submitting) {
				return _react2.default.createElement(_.SLLoadingIcon, null);
			}
			return (
				_react2.default.createElement('button', {
						key: 'confirm',
						className: 'btn ' + buttonClass,
						style: _extends({
							padding: "5px 8px" },
						_this.props.style),

						onClick: _this.onConfirm }, 'Confirm'));




		};_this.state = { isOpen: false, submitting: false };return _this;}_createClass(ConfirmButton, [{ key: 'render', value: function render()

		{
			var buttonClass = this.props.buttonClass ? this.props.buttonClass : 'btn-primary';
			return (
				_react2.default.createElement('div', null,
					_react2.default.createElement('button', {
							key: 'initial',
							disabled: this.props.disabled,
							className: 'btn ' + buttonClass,
							style: _extends({
								padding: "5px 8px" },
							this.props.style),

							onClick: this.toggle },

						this.props.buttonText || "Submit"),

					_react2.default.createElement(_reactstrap.Modal, {
							isOpen: this.state.isOpen,
							size: 'md',
							toggle: this.toggle },

						_react2.default.createElement(_reactstrap.ModalHeader, null,

							this.props.confirmTitle || "Are you sure?"),

						_react2.default.createElement(_reactstrap.ModalBody, null,
							this.props.confirmBody || 'Please Confirm'),

						_react2.default.createElement(_reactstrap.ModalFooter, null,
							this.renderButton(buttonClass),
							_react2.default.createElement(_reactstrap.Button, { color: 'secondary',
									onClick: this.toggle }, 'Cancel')))));








		} }]);return ConfirmButton;}(_react2.default.Component);


ConfirmButton.propTypes = {
	/**
                             * Callback when modal is confirmed
                             */
	onConfirm: _propTypes2.default.func.isRequired,
	/**
                                                  * Text or JSX to show in modal body
                                                  */
	confirmBody: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	/**
                                * Text or JSX to show in modal header
                                */
	confirmTitle: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	/**
                                * Classes to apply to button "space separated"
                                * example: 'btn-success'
                                */
	buttonClass: _propTypes2.default.string,
	/**
                                           * Whether the button is disabled
                                           */
	disabled: _propTypes2.default.bool,
	/**
                                      * Text to display on the button
                                      */
	buttonText: _propTypes2.default.string,
	/**
                                          * Additional styles to apply to the button
                                          */
	style: _propTypes2.default.object };


ConfirmButton.defaultProps = {
	confirmTitle: 'Are you sure?',
	confirmBody: 'Please Confirm',
	buttonClass: 'btn-primary',
	disabled: false,
	buttonText: 'Submit' };exports.default =


ConfirmButton;