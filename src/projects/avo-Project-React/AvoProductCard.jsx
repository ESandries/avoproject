import React from 'react';

const AvoProductCard = (props) => {
    return (
        <div className='avoProductCard'>
            <img src={props.avoProductImageURL} alt="" className='avoProductImage' />
            <p className="avoProductName">{props.AvoProductName}</p>
            <p className="avoPrice">{props.avoProductPrice}</p>
        </div>
    );
};

export default AvoProductCard;