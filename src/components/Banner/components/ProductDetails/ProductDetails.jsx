import React, {useState} from 'react';
import ReactDOM  from 'react-dom';
import MoreInfoModal from '../MoreInfoModal/MoreInfoModal.jsx';
import './ProductDetails.scss';

const ProductDetails = () => {
	const [modalState, setModalState] = useState(false);

	const toggleModal = () => setModalState(!modalState);

	return (
		<div className={'product-details-wrapper'}>
			<div className={'product-details-header-wrapper'} >
				<div className={'product-details-header'}>Protect your home</div>
				<div className={'product-details-subheader'}>for a criminally low price</div>
			</div>
			<div className={'banner-mobile product-two'} />
			<div className={'product-details-actions'} >
				<button className={'get-started'} >Get started for € 59,99</button>
				<button className={'more-info info'} onClick={toggleModal}>More information</button>
			</div>
			{
				modalState && <MoreInfoModal toggleModal={toggleModal}/>
			}
		</div>
	);
};

export default ProductDetails;