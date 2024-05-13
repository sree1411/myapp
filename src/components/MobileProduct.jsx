 
import React from 'react';
import { Link } from 'react-router-dom';
import { MobileInfoData } from '../data/MobileData';

const MobileProduct = () => {
    

    
    return (
        <>
            <div className="fashionPage">
                <h1 className='fashionText'> Fashion Category </h1>
                <div className='productItem'>
                    {MobileInfoData.map((product) => (
                        <div className='pp' key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.title} />
                            </Link>
                            <p>{product.title}</p>
                            <Link to={`/product/${product.id}`}>
                            <p className='ppp'>click here</p>
                            </Link>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    );
};

export default MobileProduct;
