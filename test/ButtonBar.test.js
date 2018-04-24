import React from 'react';
import { shallow } from 'enzyme';

import {ButtonBar} from '../dist';


describe('<ButtonBar />', () => {

	it('should space out children', () => {
		let wrapper = shallow(
			<ButtonBar
				buttons={[
					<button>Hello</button>,
					<button>My</button>,
					<button>Friend</button>
				]}
			/>
		);

		wrapper.find('div').length.should.eq(3);
		wrapper.find('div').map(a => 
			a.props().style.should.have.property('paddingRight', '10px')
		);
	})

})