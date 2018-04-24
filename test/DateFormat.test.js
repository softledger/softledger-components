
import React from 'react';
import { shallow } from 'enzyme';

import {DateFormat} from '../dist';
import moment from 'moment';

describe('<DateFormat />', () => {

	it('should display default format', () => {
		const wrapper = shallow(
			<DateFormat
				date={moment()}
			/>
		);

		wrapper.text().should.eq(moment().format('MM/DD/YYYY'));
	});


	it('should display custom format', () => {
		const wrapper = shallow(
			<DateFormat
				date={moment()}
				format="MMM/YY"
			/>
		)

		wrapper.text().should.eq(moment().format('MMM/YY'));
	});

})