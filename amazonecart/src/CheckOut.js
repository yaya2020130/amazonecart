import React from 'react';
import SubTotal from './SubTotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider'
function CheckOut() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='checkOut'>
     <div className='checkout_left'>
       <img className='checkout_add' src="https://m.media-amazon.com/images/I/61V06aLq43L._AC_UY436_FMwebp_QL65_.jpg" alt="img"/>
       <div > 
         <h2 className='checkout_title'> Your shopping Basket
         </h2>
         {basket.map(item=>(
           <CheckoutProduct
           id={item.id}
           title={item.title}
           image={item.image}
           price={item.price}
           rating={item.rating}
           />
         ))}
         {/* checkoutProduct*/ }
         
         </div>
         
     </div>
     <div className='checkout_right'>
       <SubTotal/>
     </div>
    </div>
  )
}

export default CheckOut
