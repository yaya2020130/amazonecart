import React from 'react'

function Header() {
  return (
    <div className='header'>
      <img  className='header_logo'src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fgc%2Fdesigns%2Flivepreview%2Famazon_drkblue_noto_printfold_v2016_us-main._CB468920742_.png&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FAmazon-com-Gift-Cards-Print-Home%2Fdp%2FBT00DDC7BK&tbnid=x9QcBoHHhmTdcM&vet=12ahUKEwj4mPze59rrAhVBgZ4KHa6rCVUQMygAegUIARDOAQ..i&docid=yzrh6PJyufZgVM&w=500&h=380&q=amazon%20logo&ved=2ahUKEwj4mPze59rrAhVBgZ4KHa6rCVUQMygAegUIARDOAQ' alt="img"></img>
      <div className='header_search'>
        <input className='header_searchIn'></input>
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
