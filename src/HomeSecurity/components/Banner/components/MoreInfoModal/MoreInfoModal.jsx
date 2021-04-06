import React from 'react';
import PropTypes from 'prop-types';
import './MoreInfoModal.scss';

const MoreInfoModal = ({toggleModal}) => (
	<div className={'modal-container'}>
		<div className={'modal-content'}>
			<div className={'modal-header'}>More information</div>
			<div className={'product-info'}>
				<div className={'product-image-container'}>
					<div className={'product-two'}/>
				</div>
				<div className={'product-info-header'}>Warning Red Alert Basic</div>
				<div className={'product-info-subheader'}>Contains 3 door sensors, 2 door locks, 1 alarm and 1 hub.</div>
				<div className={'product-price'}>€ 59,99</div>
			</div>
			<div className={'product-info last'}>
				<div className={'product-image-container'}>
					<div className={'product-one'}/>
				</div>
				<div className={'product-info-header'}>Warning Red Alert Premium</div>
				<div className={'product-info-subheader'}>Contains everything Red Alert Basic has, plus a weather proof
					camera
				</div>
				<div className={'product-price'}>€ 109,99</div>
			</div>
			<div className={'modal-action-bar'}>
				<button className={'close-modal'} onClick={toggleModal}>Close</button>
			</div>
		</div>
	</div>
);

MoreInfoModal.propTypes = {
	toggleModal: PropTypes.func,
};

MoreInfoModal.defaultProps = {
	toggleModal: () => null,
};

export default MoreInfoModal;