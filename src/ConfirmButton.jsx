'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal, ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap';
import {SLLoadingIcon} from './';

/**
 * Button which, when clicked, displays a confirm modal
 */
class ConfirmButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			submitting: false
		}
	}

	toggle = () => this.setState({
		isOpen: !this.state.isOpen
	})

	onConfirm = e => {
		this.setState({
			submitting: true
		});
		return this.props.onConfirm()
			.then(() => this.setState({
				submitting: false,
				isOpen: false
			}));
	}

	renderButton = buttonClass => {
		if(this.state.submitting) {
			return <SLLoadingIcon />
		}
		return (
			<button 
				key="confirm"
				className={`btn ${buttonClass}`}
				style={{
					padding: "5px 8px",
					...this.props.style
				}}
				onClick={this.onConfirm}
			>
				Confirm
			</button>
		);
	}

	render() {
		const buttonClass = this.props.buttonClass ? this.props.buttonClass : 'btn-primary';
		return (
			<div>
				<button 
					key="initial"
					disabled={this.props.disabled}
					className={`btn ${buttonClass}`}
					style={{
						padding: "5px 8px",
						...this.props.style
					}}
					onClick={this.toggle}
				>
					{this.props.buttonText || "Submit"}
				</button>
				<Modal
					isOpen={this.state.isOpen}
					size="md"
					toggle={this.toggle}
				>
					<ModalHeader
					>
						{this.props.confirmTitle || "Are you sure?"}
					</ModalHeader>
					<ModalBody>
						{this.props.confirmBody || 'Please Confirm'}
					</ModalBody>
					<ModalFooter>
						{this.renderButton(buttonClass)}
	          <Button color="secondary" 
	          	onClick={this.toggle}
	          >
	          	Cancel
	          </Button>
					</ModalFooter>
				</Modal>
			</div>
		);

	}
}

ConfirmButton.propTypes = {
	/**
	 * Callback when modal is confirmed
	 */
	onConfirm: PropTypes.func.isRequired,
	/**
	 * Text or JSX to show in modal body
	 */
	confirmBody: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/**
	 * Text or JSX to show in modal header
	 */
	confirmTitle: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/**
	 * Classes to apply to button "space separated"
	 * example: 'btn-success'
	 */
	buttonClass: PropTypes.string,
	/**
	 * Whether the button is disabled
	 */
	disabled: PropTypes.bool,
	/**
	 * Text to display on the button
	 */
	buttonText: PropTypes.string,
	/**
	 * Additional styles to apply to the button
	 */
	style: PropTypes.object
}

ConfirmButton.defaultProps = {
	confirmTitle: 'Are you sure?',
	confirmBody: 'Please Confirm',
	buttonClass: 'btn-primary',
	disabled: false,
	buttonText: 'Submit'
}

export default ConfirmButton;