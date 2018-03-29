'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Multi-purpose button 
 * shows loading icon if onSubmit is promise based
 * controls loading state
 */
export default class LoadingButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		} 
	}

	handleClick = e => {
		if(this.props.notPromise) {
			this.props.onClick();
		} else {
			this.setState({loading:true});
			this.props.onClick()
				.then(() => this.setState({
					loading: false
				}));
		}
	}

	renderButtonText = () => {
		//iconClass takes preference
		if(this.props.iconClass) {
			return <FontAwesomeIcon icon={this.props.iconClass} />
		} else {
			return this.props.buttonText;
		}
	}

	renderButton = buttonClass => (
		<button 
			className={`btn ${buttonClass}`}
			style={{
				padding: "5px 8px",
				...this.props.style
			}}
			onClick={this.handleClick}
			disabled={this.props.disabled}
		>
			{this.renderButtonText()}
		</button>
	)

	renderButtonWithToolTip = buttonClass => (
		<Tooltip
			placement={this.props.toolTipPlacement || 'top'}
			overlay={this.props.toolTip}
		>
			{this.renderButton(buttonClass)}
		</Tooltip>
	)

	render() {
		const buttonClass = this.props.buttonClass ? this.props.buttonClass : 'btn-primary';

		return this.state.loading ? (
				<img style={{
					width: "40px"
					}} 
					src="https://s3.amazonaws.com/sl-ui-assets/images/spinner.gif" 
				/>
			) : (
			<div>
				{
					this.props.toolTip ?
						this.renderButtonWithToolTip(buttonClass)
					: this.renderButton(buttonClass)
				}
			</div>
		)
	}
}

LoadingButton.propTypes = {
	/**
	 * Callback for when the button is clicked
	 * *if it does not return a promise, set prop 'notPromise'={true}
	 */
	onClick: PropTypes.func.isRequired,
	/**
	 * Font Awesome icon name to be used
	 * *if set buttonText is ignored
	 */
	iconClass: PropTypes.string,
	/**
	 * Optional classNames to apply to the button
	 */
	buttonClass: PropTypes.string,
	/**
	 * Set to true to disable the button
	 */
	disabled: PropTypes.bool,
	/**
	 * Text to display on the button
	 * **required** if iconClass is not set
	 */
	buttonText: PropTypes.string,
	/**
	 * Text to display as a tooltip when the button is hovered
	 */
	toolTip: PropTypes.string,
	/**
	 * Location the tooltip should appear
	 */
	toolTipPlacement: PropTypes.oneOf(['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
	/**
	 * Specifies that the onClick function does not return a Promise
	 */
	notPromise: PropTypes.bool
}

LoadingButton.defaultProps = {
	buttonClass: 'btn-primary',
	disabled: false,
	toolTipPlacement: 'top',
	notPromise: false
}