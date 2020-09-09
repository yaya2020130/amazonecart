import React from 'react'

function Product({id,title,price,image,rating}) {
  return (
    <div className="product">
      <div className="product_ifo">
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
      <img className="" src={image}alt="img">
      </img>
      <button>Add To Basket</button>
    </div>
  )
}

export default Product
