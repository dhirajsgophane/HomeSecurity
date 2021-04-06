import React from 'react';
import { shallow } from 'enzyme';
import QASection from './QASection';

const sectionDetails = {
	question: 'How long does Red Alert stay active after enabling?',
	answer: 'Once you enable Red Alert, it stays active until the moment you have set during the initial setup of your Red Alert Home Alarm. By default it is 8:00 in the morning.'
};

const mockSetExpandedSection = jest.fn();

describe("QASection", () => {
	it("should render qna-section", () => {
		const wrapper = shallow(<QASection sectionDetails={sectionDetails} isExpanded={false} setExpandedSection={mockSetExpandedSection}/>);
		expect(wrapper.find('.qna-section').length).toEqual(1);
	});

	it("should render expanded qna-section", () => {
		const wrapper = shallow(<QASection sectionDetails={sectionDetails} isExpanded={true} setExpandedSection={mockSetExpandedSection}/>);
		expect(wrapper.find('.qna-section.expanded').length).toEqual(1);
	});

	it("should call toggle function to switch view of section", () => {
		const wrapper = shallow(<QASection sectionDetails={sectionDetails} isExpanded={true} setExpandedSection={mockSetExpandedSection}/>);
		wrapper.find('.qna-section').simulate('click');
		expect(mockSetExpandedSection).toHaveBeenCalled();
	});
});