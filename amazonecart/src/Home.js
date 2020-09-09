import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div className="home">
  <div className='home_container'>
    <img  className='home_containerImg' src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_fr-FR._CB406827360_.jpg" alt="img" />
    <div className='home__row'>
    <Product/>
    <Product/>
    <Product/>
    <Product/> 
  
  
    </div>

    <div className='home__row'>
    <Product/>
    <Product/>
    <Product/>
    </div>
    <div className='home__row'>
    <Product/>
      
    </div>
  </div>
    </div>
  )
}

export default Home
