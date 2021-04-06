import React from 'react';
import { shallow } from 'enzyme';
import MostAskedQuestions from './MostAskedQuestions';

describe("MostAskedQuestions", () => {
	it("should render most-asked-question-wrapper", () => {
		const wrapper = shallow(<MostAskedQuestions />);
		expect(wrapper.find('.most-asked-question-wrapper').length).toEqual(1);
	});
	it("should render 5 Q&A sections", () => {
		const wrapper = shallow(<MostAskedQuestions />);
		expect(wrapper.find('QASection').length).toEqual(5);
	});
	it("should expand first section on click of first section", () => {
		const wrapper = shallow(<MostAskedQuestions />);
		wrapper.find('QASection').first().props().setExpandedSection();
		expect(wrapper.find('QASection').first().props().isExpanded).toEqual(true);
	});
	it("should expand last section on click of last section and should collapse previously opened section", () => {
		const wrapper = shallow(<MostAskedQuestions />);
		wrapper.find('QASection').last().props().setExpandedSection();
		expect(wrapper.find('QASection').last().props().isExpanded).toEqual(true);
		expect(wrapper.find('QASection').first().props().isExpanded).toEqual(false);
	});
});