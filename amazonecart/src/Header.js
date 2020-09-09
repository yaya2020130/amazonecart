import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <div className='header'>
      <img  className='header_logo'src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="img"></img>
      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span classname ='header_optionone'>Hello</span>
          <span classname ='header_optiontwo'>SignIn</span>
        </div>
        <div className='header_option'>
        <span classname ='header_optionone'>Returns</span>
          <span classname ='header_optiontwo'>Orders</span>
        </div>
        <div className='header_option'>
        <span classname ='header_optionone'>Your</span>
          <span classname ='header_optiontwo'>Prime</span>
        </div>
      </div>
    </div>
  )
}

export default Header
