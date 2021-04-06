import React from 'react';
import { shallow } from 'enzyme';
import ProductDetails from './ProductDetails';

describe("ProductDetails", () => {
	it("should render product-details-wrapper", () => {
		const wrapper = shallow(<ProductDetails />);
		expect(wrapper.find('.product-details-wrapper').length).toEqual(1);
	});
	it("should initialize modal to be hidden", () => {
		const wrapper = shallow(<ProductDetails />);
		expect(wrapper.find('MoreInfoModal').length).toEqual(0);
	});
	it("should initialize modal to be hidden", () => {
		const wrapper = shallow(<ProductDetails />);
		wrapper.find('.more-info').simulate('click');
		expect(wrapper.find('MoreInfoModal').length).toEqual(1);
	});
});