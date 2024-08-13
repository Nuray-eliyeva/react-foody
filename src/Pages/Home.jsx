import React from 'react'

function Home() {
  return (
    <div>
      {/*-----SECTION-1----*/}
      <div className="foods">
        <div className="container">
          <div className="row food-items">
            <div className="col-lg-6 col-12 food-txt"><div ><h1>Our Food site makes it easy to find local food</h1> <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
              <div className="butn-contain"><button className='btn1 btn-red'>Registr</button> <button className='btn1 btn-white'>Order Now</button></div></div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="img-div">
                <div className="message" id='msg-1'><img src="https://foody-app-copy.vercel.app/pizzaHut.svg" alt="pizza" /><span>Pizza Hut Yummy...</span></div>
                <img src="https://foody-app-copy.vercel.app/bigBurgerMain.svg" alt="" />
                <div className="message" id='msg-2'><img src="https://foody-app-copy.vercel.app/frenchFries.svg" alt="fri" /><span>French Fries Yummy...</span></div>
                <div className="message" id='msg-3'><img src="https://foody-app-copy.vercel.app/cheesBurger.svg" alt="burger" /><span> Cheesburger Yummy...</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------SECTION-2------*/}
      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-12"><h1>Features</h1><p className='mb-4 mt-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p></div>
            <div className="row">
              <div className="col-lg-4 col-6"><div className="card1"> <img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1718804187143%3Falt%3Dmedia%26token%3D3a0444b4-77b1-41ba-9749-94ea0a9a771a&w=256&q=75" alt="pizza" /> <h2>Margarita</h2> <p>Mushroom, Cheese</p></div></div>
              <div className="col-lg-4 col-6"><div className="card1"> <img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1718803844644%3Falt%3Dmedia%26token%3Db0a501eb-abe0-478f-80dd-327310b8fedf&w=256&q=75" alt="pizza" /> <h2>Nuggets</h2> <p>Fried Chicken</p></div></div>
              <div className="col-lg-4 col-6"><div className="card1"> <img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1718804385362%3Falt%3Dmedia%26token%3Dc2645f79-263b-46c4-84a4-1d09bf55e837&w=256&q=75" alt="pizza" /> <h2>Maki</h2> <p>Fish, Rice, Vasabi</p></div></div>

            </div>
          </div>
        </div>
      </div>
      {/*------SECTION-3------*/}
      <div className="menu">
        <div className="container">
          <div className="row">

            <div className="col-lg-6"><div className="menu-txt"><h1>New Big Mac Menu</h1><p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p></div></div>
            <div className="col-lg-6"><div className="menu-img"><img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1719054282203%3Falt%3Dmedia%26token%3D9069be94-6748-4312-9683-c4f078930349&w=256&q=75" alt="burger" className='img1' />
              <img src="https://foody-app-copy.vercel.app/frencHomeRectangle.svg" alt="background" className='img2' /></div>
            </div>

            <div className="col-lg-6"><div className="menu-img"><img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1719061795044%3Falt%3Dmedia%26token%3D48a80009-4cb9-4d39-8fcb-4bbde5781a3e&w=256&q=75" alt="burger" className='img1' />
              <img src="https://foody-app-copy.vercel.app/frencHomeRectangle.svg" alt="background" className='img2' /></div>
            </div>
            <div className="col-lg-6"><div className="menu-txt"><h1>Flower</h1><p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p></div></div>

            <div className="col-lg-6"><div className="menu-txt"><h1>New Basket Menu 1</h1><p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p></div></div>
            <div className="col-lg-5"><div className="menu-img"><img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1719054320541%3Falt%3Dmedia%26token%3Daa404d30-9ba9-487d-810d-e7910a2b1991&w=256&q=75" alt="burger" className='img1' />
              <img src="https://foody-app-copy.vercel.app/frencHomeRectangle.svg" alt="background" className='img2' /></div>
            </div>
          </div>
        </div>
      </div>

{/*-----SECTION-4----*/ }
<div className="features">
        <div className="container">
          <div className="row">
            <div className="col-12"><h1>Our Popular Update New Foods</h1><p className='mb-4 mt-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p></div>
            <div className="row">
              <div className="col-lg-4 col-6"><div className="card1"> <img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1718803974260%3Falt%3Dmedia%26token%3D8926d4ba-55eb-4088-8a8d-629a737674f4&w=256&q=75" alt="Wafle" /> <h2>Waffle</h2> <p>Sweet</p></div></div>
              <div className="col-lg-4 col-6"><div className="card1"> <img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1718438731119%3Falt%3Dmedia%26token%3Ddc6b0ac7-6bac-47ab-9c5c-bb16925b7032&w=256&q=75" alt="cake" /> <h2>Cake</h2> <p>Cake Reciep</p></div></div>
              <div className="col-lg-4 col-6"><div className="card1"> <img src="https://foody-app-copy.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffoody-app-f27a2.appspot.com%2Fo%2Ffiles%252Fimages%252F1718804496745%3Falt%3Dmedia%26token%3D11b46190-9c1e-4493-9661-22b2694b9969&w=256&q=75" alt="nigiri" /> <h2>Nigiri</h2> <p>Fish, Rice, Vasabi</p></div></div>

            </div>
          </div>
        </div>
      </div>

{/*----Section-5----*/ }
  <div className="explore">
    <div className="img"><img src="https://foody-app-copy.vercel.app/footerPizza.svg" alt="pizza" /></div>
    <div className="exp-txt"><h2>Discover Restaurants Near From you</h2> <button className='btn1 btn-yellow mt-4'>Explore Now</button></div>
    <div className="img"><img src="https://foody-app-copy.vercel.app/footerBurger.svg" alt="burger" /></div>
  </div>



    </div>
  )
}

export default Home