import React, { useState,useEffect } from 'react'
import axios from'./axios'

import './Payment.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CheckoutProduct from './CheckoutProduct'
import { Link ,useHistory} from 'react-router-dom'
import { calculateTotal } from './reducer.js'
// import { Card } from '@material-ui/core'
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()
  const stripe = useStripe()
  const elements = useElements()
  const history=useHistory()
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret,setClientSecret]=useState(true)
  useEffect(() => {
    //generate the special stripe secrete which allows us to charge a customer
    const getClientSecret=async()=>{
const response=await axios
  ({method:"post",
  url:`/payments/create?total=${calculateTotal(basket)*100}`})
setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])
  console.log('the secret is>>>>>>>>>>>',clientSecret)
  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)
    //do all the fancy stripe
const payload=await stripe.confirmCardPayment(clientSecret,{
  payment_method:{
    card:elements.getElement(CardElement)
  }
}).then(({paymentIntent})=>{
  //paymentintent=paymentconfiramtio
  setSucceeded(true)
  setError(null)
  setProcessing(false)
  history.replaceState('/orders')
})
  }
  const handleChange = event => {
    //listen for changes in the card elemnt
    //and display any error as customer types their element
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "")
  }
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
            <h2> Payment Method</h2>
          </div>
          <div className='payment_detail'>
            <form onClick={handleSubmit}>
              < CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>  
                  )}
              
                  decimalScale={2}
                  value={calculateTotal(basket)}
                  disableType={'text'}
                  thousandSepatator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}><span>{processing ? <p>Processing</p> : "Buy Now"}</span></button>

              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment



