import React from 'react';
import './QASection.scss';

const QASection = ({sectionDetails, isExpanded, setExpandedSection}) => {
	const {question, answer} = sectionDetails;
	return (
		<div
			className={`qna-section ${isExpanded ? 'expanded': ''}`}
			onClick={setExpandedSection}
		>
			<div className='section-header'>
				<div className={'section-question'}>{question}</div>
				<div className='arrow'/>
			</div>
			<div className='section-answer'>{answer}</div>
		</div>
	);
};

export default QASection;