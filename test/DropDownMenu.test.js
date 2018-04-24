
import React from 'react';
import { shallow } from 'enzyme';

import { DropDownMenu } from '../dist';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

describe('<DropDownMenu />', () => {

	it('default values', () => {
		const wrapper = shallow(
			<DropDownMenu>
				Children
			</DropDownMenu>
		);
		wrapper.contains(<FontAwesomeIcon icon="bars" />).should.eq(true);
		wrapper.find(Dropdown).prop('isOpen').should.eq(false);
		wrapper.setState({
			dropdownOpen: true
		})
		wrapper.find(Dropdown).prop('isOpen').should.eq(true);
	});

	it('custom values', () => {
		const wrapper = shallow(
			<DropDownMenu 
				toggleTag={<h1>Toggle Me</h1>}
				class="text-center"
				openRight={true}
			>
				Children
			</DropDownMenu>
		);
		wrapper.find(DropdownToggle).contains(<h1>Toggle Me</h1>).should.eq(true);
		wrapper.find(DropdownMenu).prop('right').should.eq(false);
		wrapper.find(Dropdown).hasClass('text-center').should.eq(true);
		wrapper.find(Dropdown).prop('isOpen').should.eq(false);
		wrapper.setState({
			dropdownOpen: true
		})
		wrapper.find(Dropdown).prop('isOpen').should.eq(true);
	});

})