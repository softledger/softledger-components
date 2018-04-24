'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Thin wrapper on reactstrap DropdownMenu
 * Toggle tag defaults to a font aweseom bars
 * Controls toggle state
 */
export default class DropDownMenu extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => this.setState({
  	dropdownOpen: !this.state.dropdownOpen
  })

  renderToggle = () =>  {
  	if(this.props.toggleTag) {
  		return this.props.toggleTag;
  	} else {
  		return <FontAwesomeIcon icon="bars" />
  	}
  }


	render() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} 
				toggle={this.toggle}
				className={this.props.class}>
				<DropdownToggle>
					{this.renderToggle()}
				</DropdownToggle>
				<DropdownMenu right={!this.props.openRight}>
					{this.props.children}
				</DropdownMenu>
			</Dropdown>
		);
	}
}

DropDownMenu.propTypes = {
	/**
	 * Custom Tag
	 */
	toggleTag: PropTypes.object,
	/**
	 * className to apply to DropDown container
	 */
	class: PropTypes.string,
	/**
	 * Should open on the right
	 */
	openRight: PropTypes.bool
}

DropDownMenu.defaultProps = {
	toggleTag: <FontAwesomeIcon icon='bars' />,
	openRight: false
}