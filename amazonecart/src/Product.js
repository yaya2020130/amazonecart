import React from 'react'
import {useStateValue} from './StateProvider'
function Product({id,title,price,image,rating}) {
  const [{basket},dispatch]=useStateValue();
  console.log("this is the " ,basket);
  const addToBasket=()=>{
    //dispatch the item into the data layer

dispatch({
  type:'ADD_TO_BASKET',
 item:{
  //  id:id,
   title:title,
   image:image,
   price:price,
   rating:rating,
 },
});
  };
  return (
    <div className="product">
      <div className="product_info">
  <p> {title}</p>
        <p className="product_price">
          <small>$</small>
  <strong>{price}</strong>
        </p>
          <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_,i)=>(<p>*</p>))
              
            }
          </div>
      </div>
      <img className="product_img" src={image}alt="img">
      </img>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product
