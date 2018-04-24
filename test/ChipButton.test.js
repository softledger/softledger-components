import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import {ChipButton} from '../dist';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

describe('<ChipButton />', () => {

	it('should render with string', () => {
		const wrapper = mount(
			<ChipButton
				text="My Button String"
				iconClass="times"
			/>
		);
		wrapper.contains(
			<FontAwesomeIcon 
				icon="times" 
				style={{marginLeft: "5px"}}
			/>
		).should.eq(true);
		wrapper.text().should.eq('My Button String');
	})

	it('should render with jsx', () => {
		const wrapper = shallow(
			<ChipButton
				text={<h1>Big Text</h1>}
				iconClass="times"
			/>
		);
		wrapper.contains(<h1>Big Text</h1>).should.eq(true);
	})

	it('should call onClick', () => {
		const spy = sinon.spy();
		const wrapper = shallow(
			<ChipButton
				text="test"
				onClick={spy}
				iconClass="times"
			/>
		);
		wrapper.find('div').simulate('click');
		spy.should.have.been.calledOnce;
	})

})