
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { LoadingButton } from '../dist';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Tooltip from 'rc-tooltip';

const click = {
	fn: () => Promise.resolve(),
	badFn: () => new Promise((resolve, reject) => {
		setTimeout(
			() => Promise.resolve(),
			500
		);
	})
}
const clickSpy = sinon.spy(click, 'fn');

describe('<LoadingButton />', () => {
	afterEach(() => {
		click.fn.resetHistory();
	})

	it('default with text', () => {
		const wrapper = shallow(
			<LoadingButton
				onClick={click.fn}
				buttonText="Click Me"
			/>
		);
		wrapper.find('button').text().should.eq('Click Me');
		wrapper.find('button').simulate('click');
		clickSpy.should.have.been.calledOnce;
	});

	it('default with icon', () => {
		const wrapper = shallow(
			<LoadingButton
				onClick={click.fn}
				iconClass="times"
			/>
		);
		wrapper.find('button').contains(<FontAwesomeIcon icon="times" />).should.eq(true);
		wrapper.find('button').simulate('click');
		clickSpy.should.have.been.calledOnce;
	});

	it('with tooltip', () => {
		const wrapper = shallow(
			<LoadingButton
				onClick={click.fn}
				iconClass="times"
				toolTip="My ToolTip"
			/>
		);
		wrapper.find('button').contains(<FontAwesomeIcon icon="times" />).should.eq(true);
		wrapper.find('button').simulate('mouseOver');
		wrapper.find(Tooltip).prop('overlay').should.eq('My ToolTip');
	})

	it('should show loading icon', () => {
		const wrapper = shallow(
			<LoadingButton
				onClick={click.badFn}
				iconClass="My Button"
			/>
		);
		wrapper.find('button').simulate('click');
		wrapper.contains(
			<img style={{
					width: "40px"
				}} 
				src="https://s3.amazonaws.com/sl-ui-assets/images/spinner.gif" 
			/>
		).should.eq(true);
	})

})
