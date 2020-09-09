import React from 'react'

function Product() {
  return (
    <div className="product">
      <div className="product_ifo">
        <p> The lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
          <div className="product-rating">
            <p>*</p>
          
          </div>
      </div>
      <img className="" src=" https://books.google.com/books/content/images/frontcover/DSxjDwAAQBAJ?fife=w400-h600" alt="img">
      </img>
      <button>Add To Basket</button>
    </div>
  )
}

export default Product
