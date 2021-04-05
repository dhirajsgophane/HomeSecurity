import React, {useState} from 'react';
import QASection from './QASection/QASection.jsx';
import './MostAskedQuestions.scss';

const qnaCollection = [
	{
		question: 'How long does Red Alert stay active after enabling?',
		answer: 'Once you enable Red Alert, it stays active until the moment you have set during the initial setup of your Red Alert Home Alarm. By default it is 8:00 in the morning.'
	},
	{
		question: 'When should I replace Red Alert?',
		answer: 'Once indication on the device turns red it is time to replace the device.'
	},
	{
		question: 'What is the benefit of Red Alert compared to other home invasion alarms?',
		answer: 'Red Alert is reliable and has advance technology which provide high level security.'
	},
	{
		question: 'What guarantees does Red Alert give against burglary?',
		answer: 'Red Alerts full proof security arrangements provides high level reliability and guarantee.'
	},
	{
		question: 'Why is Red Alert so cheap compared to competitors?',
		answer: 'Red Alert is committed to provide best service in affordable price.'
	}
];

const MostAskedQuestions = () => {
	const [expandedSection, setExpandedSection] = useState(-1);

	const handleExpand = index =>
		expandedSection === index ? setExpandedSection(-1) : setExpandedSection(index);

	return (
		<div className={'most-asked-question-wrapper'}>
			<div className={'most-asked-question-header'} >Most Asked Questions</div>
			<div className={'section-wrapper'}>
				{qnaCollection.map( (section, index) =>
					<QASection
						key={index}
						sectionDetails={section}
						isExpanded={expandedSection === index}
						setExpandedSection={() => handleExpand(index)}
					/>
				)}
			</div>
		</div>
	);
};

export default MostAskedQuestions;