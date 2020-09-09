import React from 'react';

function CheckOut() {
  return (
    <div className='checkOut'>
     <div className='checkout_left'>
       <img className='checkout_add' src="https://m.media-amazon.com/images/I/61V06aLq43L._AC_UY436_FMwebp_QL65_.jpg" alt="img"/>
       <div > 
         <h2 className='checkout_title'> Your shopping Basket
         </h2></div>
         
     </div>
     <div className='checkout_right'>
       <h2>the subttotal go here</h2>
     </div>
    </div>
  )
}

export default CheckOut
