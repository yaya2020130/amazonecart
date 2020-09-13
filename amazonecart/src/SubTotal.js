import React from 'react'
import"./SubTotal.css"
import CurrencyFormat from "react-currency-format"
import {useStateValue} from './StateProvider'
import { useHistory } from 'react-router-dom'
function SubTotal() {
  const history=useHistory()
  //pull the basket from the useStateValue
  const [{basket},dispatch]=useStateValue()
  //calculate basket tototal 
  const calculateTotal=(basket)=>{
    return basket.reduce((price,item)=>item.price+ price,0)
  }
  return (
    <div className="subtotal">
    
    <CurrencyFormat
    
    renderText={(value)=>(
<>
<p>
  SubTotal({basket.length} items):
  
  {""}
  <strong>{calculateTotal(basket)}</strong>
</p>
<small className='subtotal_gift'>
  <input className="input" type="checkbox"/> This order contains a gift
</small>
</>

    )}
    decimalScale={2}
value={0}
displayType={'text'}
thousandSeparator={true}
prefix={'$'}
 /> 
 <button onClick={e=>history.push('/payment')}>Proceed to CheckOut</button>
    </div>
  )
}

export default SubTotal
