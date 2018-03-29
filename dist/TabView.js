'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');



var _classnames = require('classnames');var _classnames2 = _interopRequireDefault(_classnames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Thin wrapper on reactstrap's Tabs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */var
TabView = function (_React$Component) {_inherits(TabView, _React$Component);
	function TabView(props) {_classCallCheck(this, TabView);var _this = _possibleConstructorReturn(this, (TabView.__proto__ || Object.getPrototypeOf(TabView)).call(this,
		props));_this.





		toggle = function (tab) {
			if (_this.state.activeTab !== tab) {
				_this.setState({
					activeTab: tab });

				if (_this.props.tabs[tab].onClick) {
					_this.props.tabs[tab].onClick();
				}
			}
		};_this.

		renderLinks = function (tabs, activeTab) {return tabs.map(function (tab, idx) {return (
					_react2.default.createElement(_reactstrap.NavItem, { key: idx },
						_react2.default.createElement(_reactstrap.NavLink, { className: (0, _classnames2.default)({ active: activeTab === idx }),
								onClick: function onClick() {return _this.toggle(idx);} },
							tab.Header)));});};_this.




		renderTabs = function (tabs) {return tabs.map(function (tab, idx) {return (
					_react2.default.createElement(_reactstrap.TabPane, { tabId: idx, key: idx },
						tab.Body));});};_this.state = { activeTab: 0 };return _this;}_createClass(TabView, [{ key: 'render', value: function render()



		{var

			tabs =
			this.props.tabs;var

			activeTab =
			this.state.activeTab;

			return _react2.default.createElement('div', null,
				_react2.default.createElement(_reactstrap.Nav, { tabs: true, justified: true },
					this.renderLinks(tabs, activeTab)),

				_react2.default.createElement(_reactstrap.TabContent, { activeTab: this.state.activeTab },
					this.renderTabs(tabs)));



		} }]);return TabView;}(_react2.default.Component);exports.default = TabView;


TabView.propTypes = {
	/**
                       * Array of tabs to display
                       */
	tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		/**
                                                                * Tab Navigation Header Text
                                                                */
		Header: _propTypes2.default.string.isRequired,
		/**
                                                  * JSX to display as the tab content
                                                  */
		Body: _propTypes2.default.object.isRequired,
		/**
                                                * Optional callback when the tab is clicked
                                                * useful for loading content
                                                */
		onClick: _propTypes2.default.func })).
	isRequired };