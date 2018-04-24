
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import {TabView } from '../dist';
import { NavLink, TabPane } from 'reactstrap';

const click = {fn: () => Promise.resolve()}
const clickSpy = sinon.spy(click, 'fn');

describe('<TabView />', () => {

	it('should show multiple tabs', () => {
		const wrapper = shallow(
			<TabView
				tabs={[{
					Header: 'My Header',
					Body: <h1>My Body</h1>,
					onClick: click.fn
				}, {
					Header: 'My Header2',
					Body: <h1>My Body2</h1>,
					onClick: click.fn
				}]}
			/>
		);
		wrapper.state().activeTab.should.eq(0);
		wrapper.find(NavLink).first().render().text().should.eq('My Header');
		wrapper.find(TabPane).first().contains(<h1>My Body</h1>).should.eq(true);
		wrapper.find(NavLink).last().simulate('click');
		clickSpy.should.have.been.calledOnce;
		wrapper.state().activeTab.should.eq(1);
	})

})
