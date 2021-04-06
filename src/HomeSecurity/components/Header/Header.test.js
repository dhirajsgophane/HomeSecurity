import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header", () => {
	it("should render header-wrapper", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('.header-wrapper').length).toEqual(1);
	});
});