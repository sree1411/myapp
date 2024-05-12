import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { MobileInfoData } from '../data/MobileData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductPage = () => {

    const [count, setCount] = useState(1)
    const { id } = useParams(); 
   const product = MobileInfoData.find((item) => item.id === parseInt(id));

   const incBtn =()=>{
     setCount(count + 1)
   }

   const decBtn =()=>{
    if(count > 1){
      setCount(count - 1)
    }
    
  }

   const dispatch = useDispatch()
  

  return (
    <>
      <NavBar />
        <div className="singlePage">
           <div className="imgsection">
               <img src={product.image} alt="" />
           </div> 
            <div className="pageDetails">

                  
                 <div className="productTitle">
                   <span className='p'> ProductName:</span> {product.title}
                 </div>
                  <div className="productPrice">
                  <span className='p'>  Price :$ </span>{product.price}
                  </div>
                 <div className="productDes">
                 <span className='p'>  Description: </span> {product.description}
                 </div>
                 <div className="productCategeory">
                 <span className='p'>   Categeory: {product.category} </span>
                 </div>
                 <div className='produBtn'>
                    <div className="count">
                        <div className="quantity">
                            <p> Quantity</p>
                            <button className='btnQ' onClick={incBtn}> + </button>
                              <span> {count}</span>
                            <button className='btnQ' onClick={decBtn} > - </button>
                        </div>
                       
                    </div>
                   <button className='addBtn' onClick={()=>dispatch(addToCart({
                    ...product,
                    quantity:count
                   }))} > Add To Cart </button>
                 </div>
            </div>
        </div>
      <Footer />
    </>
  );
};

export default ProductPage;
