import React from 'react';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import './Banner.scss';

const Banner = () => {
	return (
		<div className={'banner-wrapper'}>
			<div className={'banner-desktop product-two'} />
			<ProductDetails />
			<div className={'banner-desktop product-one'} />
		</div>
	);
};

export default Banner;