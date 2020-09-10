import React from 'react'
import Product from './Product'

function Home() {
  return (
    <>
      <div className="home">
        <div className='home_container'>
          <img className='home_containerImg' src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_fr-FR._CB406827360_.jpg" alt="img" />
          <div className='home__row'>
            <Product
              title={'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
             id={1}
              price={29.99}
              image="https://books.google.com/books/content/images/frontcover/DSxjDwAAQBAJ?fife=w400-h600"
              rating={2}

            />
            <Product
              title={'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
              id={2}
              price={1000}
              image="https://www.apple.com/content/dam/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg/_jcr_content/renditions/large.jpg"
              rating={3}

            />
            <Product
             id={4}
              title={'iphone11'}
              price={780}
              image="https://www.cricketwireless.com/uiassets/DAPW4059-detail-front.jpg"
              rating={5}

            />
            <Product
             id={5}
              title={'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
              price={60}
              image="https://m.media-amazon.com/images/I/61FxQSqEpOL._AC_SR700,525_.jpg"
              rating={2}
            />


          </div>

          <div className='home__row'>
            <Product
              title={'Apple watch'}
             id={6}
              price={29.99}
              image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSShJJPTYDuIKnF_0EYTT77-K3yhNRiDSB6rNgScdiFX4FHZDl_c2x4A43LaeYaidtwhBQ4QFyvHjA&usqp=CAc"
              rating={2}

            />
            <Product
              title={'The lean startup'}
              id={7}
              price={29.99}
              image="https://books.google.com/books/content/images/frontcover/DSxjDwAAQBAJ?fife=w400-h600"
              rating={2}

            />
            <Product
              title={'The pearl Book'}
              id={18}
              price={10.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDKIEao6LFdrfaOzQNzLDyIk6xOW7BZqEp7ltqu-V0VabXcVGvho0_1eBBnCjP-83F7GVIYHZK&usqp=CAc"
              rating={8}

            />
          </div>
          <div className='home__row'>
            <Product
              title={'nike shoes'}
              id={10}
              price={65}
              image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxdRV4gT4P_9jQtAXIcYCvOhYQIHq6tiPYlyy3um2GTBMZiYgio5bA354qsgP3Z9bel3SsCohExfw&usqp=CAc"
              rating={1}

            />

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
