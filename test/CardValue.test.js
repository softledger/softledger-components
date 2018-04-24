import React from 'react';
import { mount, shallow } from 'enzyme';

import { CardValue } from '../dist';
import { Card, CardBody, CardHeader } from 'reactstrap';

describe('<CardValue />', () => {

	it('should render without header or body', () => {
		const wrapper = shallow(
			<CardValue />
		);
		wrapper.find(CardHeader).length.should.eq(0);
		wrapper.find(CardBody).length.should.eq(1);
	})

	it('should render with string header, string body', () => {
		const wrapper = mount(
			<CardValue
				Header="My Header"
				Body="My Body"
			/>
		);
		wrapper.find(CardHeader).text().should.eq('My Header');
		wrapper.find(CardBody).text().should.eq('My Body');
	})

	it('should render with jsx header, jsx body', () => {
		const wrapper = shallow(
			<CardValue
				Header={<h1>My Header</h1>}
				Body={<p>My Body</p>}
			/>
		);
		wrapper.find(CardHeader).contains(<h1>My Header</h1>).should.eq(true);
		wrapper.find(CardBody).contains(<p>My Body</p>).should.eq(true);
	})

	it('should pad header', () => {
		const wrapper = shallow(
			<CardValue
				big={true}
				Header="Header"
			/>
		);
		wrapper.find(Card).find('div').map(c => {
			c.props().style.should.have.property('padding', '.25rem');
		});
	})

})