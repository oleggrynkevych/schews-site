import './ProductItem.scss';
import Shadow from '../../../images/shadow.png';
import { useState } from 'react';
import classNames from 'classnames';

function ProductItem(props) {
    const [openDetails, setOpenDetails] = useState(false);

    const handleDetails = () => {
        setOpenDetails(!openDetails);
    };

    const detailsButtonClasses = classNames('product-details-button', {
        open: openDetails
    });

    const hideButtonClasses = classNames('product-hide-button', {
        open: openDetails
    });

    const productItemClasses = classNames('product-item', {
        open: openDetails
    });

    return (
        <div className={productItemClasses}>
            <img className='product-photo' src={props.mainImage} alt={props.title}/>
            <img className='shadow' src={Shadow} alt={'Shadow'}/>
            <button className={detailsButtonClasses} onClick={handleDetails}>Details</button>

            <div className='product-info' style={{backgroundColor: `${props.backColor}`}}>
                <img src={props.shoeImage} alt={props.title}/>
                <h4>{props.title}</h4>
                <span className='weight'>{props.weight}</span>
                <p>{props.taste}</p>
                <span className='add-text'>{props.addText}</span>
            </div>

            <button className={hideButtonClasses} onClick={handleDetails}>Hide</button>
        </div>
    )
};

export default ProductItem;