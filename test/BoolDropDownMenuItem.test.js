
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import {BoolDropDownMenuItem} from '../dist';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


let value, 
	 wrapper;
const sample = {
	fn:  a => value = !value
}
const fnSpy = sinon.spy(sample, 'fn');
//create spy

describe('<BoolDropDownMenuItem />', () => {
	before(() => {
		wrapper = mount(
			<BoolDropDownMenuItem
				text="Menu #1"
				value={false}
				onToggle={sample.fn}
				toggle={false}
			/>
		);
	})

	afterEach(() => {
		fnSpy.resetHistory();
	})

	it('should display default text, value, icon', () => {
		wrapper.contains(
			<FontAwesomeIcon icon="plus" />
		).should.eq(true);
		wrapper.text().should.eq("|Menu #1");
	});

	it('should toggle value, and icon', () => {
		wrapper.simulate('click');
		fnSpy.should.have.been.calledOnce;
		wrapper.setProps({
			value: true
		});
		wrapper.contains(
			<FontAwesomeIcon icon="times" />
		).should.eq(true);
		wrapper.text().should.eq("|Menu #1");
	});

	it('should toggle back', () => {
		wrapper.find('BoolDropDownMenuItem').simulate('click');
		fnSpy.should.have.been.calledOnce;
		wrapper.setProps({
			value: false
		});
		wrapper.contains(
			<FontAwesomeIcon icon="plus" />
		).should.eq(true);
		wrapper.text().should.eq("|Menu #1");
	});

})