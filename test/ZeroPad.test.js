
import React from 'react';
import { shallow } from 'enzyme';

import {ZeroPad } from '../dist';

const PAD = 4;

describe('<ZeroPad />', () => {

	it('should pad text with zeroes', () => {
		const wrapper = shallow(
			<ZeroPad
				value="ab"
				pad={PAD}
			/>
		);
		wrapper.text().should.eq('00ab');
	})

	it('should pad number with zeroes', () => {
		const wrapper = shallow(
			<ZeroPad
				value={12}
				pad={PAD}
			/>
		);
		wrapper.text().should.eq('0012');
	})

	it('should not pad 0', () => {
		const wrapper = shallow(
			<ZeroPad
				value={0}
				pad={PAD}
			/>
		);
		wrapper.text().should.eq('--');
	})

	it('should not pad text longer than pad length', () => {
		const wrapper = shallow(
			<ZeroPad
				value="123456"
				pad={PAD}
			/>
		);
		wrapper.text().should.eq('123456');
	})

})
