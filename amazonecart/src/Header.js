import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider"
import {Link} from 'react-router-dom'
function Header() {
  const[{basket},dispatch]=useStateValue()  
  return (
    <div className='header'>
      <Link to="/">
      <img  className='header_logo'src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="img"/>
      </Link>
      
      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className='header_nav'>
      <Link to="Login">
        <div className='header_option'>
       
          <span classname ='header_optionLineOne'>Hello</span>
         
          <span classname ='header_optionLineTwo'>SignIn</span>
        </div>
        </Link>
        <div className='header_option'>
        <span classname ='header_optionLineOne'>Returns</span>
          <span classname ='header_optionLineTwo'>Orders</span>
        </div>
        <div className='header_option'>
        <span classname ='header_optionLineOne'>Your</span>
          <span classname ='header_optionLineTwo'>Prime</span>
        </div>
      </div>
      <Link to="CheckOut">
      <div className='header_optionBasket'>
        < ShoppingBasketIcon/><span className='header_search
        _optionLineTwo header_basketCount'>{basket?.length}</span>
      </div></Link>
      
    </div>
  )
}

export default Header
