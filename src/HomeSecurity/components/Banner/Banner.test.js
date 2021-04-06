import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';

describe("Banner", () => {
	it("should render ProductDetails component", () => {
		const wrapper = shallow(<Banner />);
		expect(wrapper.find('ProductDetails').length).toEqual(1);
	});
});