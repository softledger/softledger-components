
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import {ConfirmButton} from '../dist';
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const click = {
	fn: () => Promise.resolve()
};
let clickSpy = sinon.spy(click, 'fn');

describe('<ConfirmButton />', () => {
	beforeEach(() => {
		clickSpy.resetHistory();
	})

	it('default values', () => {
		const wrapper = shallow(
			<ConfirmButton
				onConfirm={click.fn}
			/>
		);

		wrapper.find('button').first().hasClass('btn-primary').should.eq(true);
		wrapper.find('button').first().text().should.eq('Submit');

		wrapper.find(ModalHeader).render().text().should.eq('Are you sure?');
		wrapper.find(ModalBody).render().text().should.eq('Please Confirm');
		wrapper.find(ModalFooter).render().find('button').hasClass('btn-primary').should.eq(true);
		wrapper.find(ModalFooter).find('button').simulate('click');
		clickSpy.should.have.been.calledOnce;
	})

	
	it('custom values', () => {
		const wrapper = shallow(
			<ConfirmButton
				onConfirm={click.fn}
				confirmBody={<p>My Body</p>}
				confirmTitle={<h1>My Header</h1>}
				buttonClass="btn-danger"
				buttonText="Delete"
			/>
		);

		wrapper.find('button').first().hasClass('btn-danger').should.eq(true);
		wrapper.find('button').first().text().should.eq('Delete');

		//click the button to show the modal
		wrapper.find(ModalHeader).contains(<h1>My Header</h1>).should.eq(true);
		wrapper.find(ModalBody).contains(<p>My Body</p>).should.eq(true);
		wrapper.find(ModalFooter).find('button').hasClass('btn-danger').should.eq(true);
		wrapper.find(ModalFooter).find('button').simulate('click');
		clickSpy.should.have.been.calledOnce;
	});
})