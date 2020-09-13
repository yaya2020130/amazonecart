import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import { Card } from '@material-ui/core'
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()
  const stripe = useStripe()
  const elements = useElements()
  return (
    <div className='payment' >
      <div className='payment_container'>
        <h1>
          CheckOut(<Link to='/checkout'>{basket?.length}items</Link>)
        </h1>
        {/* payment section delivery address */}
        <div className="payment_section"></div>
        {/* payment section review item */}
        <div className="payment_section">
          <div className='payment_title'>
          <h1>Delivery Address</h1>
          </div>
          <div className="payment address">
            <p> {user?.email}</p>
          </div>
        </div>
        {/* payment section payment method */}
        <div className="payment_section">
          <div className='payment_title'>
            <h1>Review item and Delivery</h1>
          </div>
          <div className='payment_item'>
            {basket.map(item => <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />)}
          </div>
        </div>
        <div className='payment_section'>


          <div className='payment_title'>
            <h2> Payment Detail</h2>
          </div>
          <div className='payment_detail'>
            <form>
              <CardElement />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment



