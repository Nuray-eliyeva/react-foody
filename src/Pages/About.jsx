import React from 'react'

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-12 about-txt  "><div ><h1>About Us</h1> <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p></div></div>

          <div className="col-lg-6 col-12">
            <div className="about-img">
              <div className='about-item'>
               <div id="msg1" className='msg'><p>Hamburger</p> <img src="https://foody-app-copy.vercel.app/aboutUs/starGroup4.svg" alt="" /> <span>5,23$</span></div>
              </div>

              <div className='about-item'>
                <div id="msg2" className='msg'><p> Sousage Pizza</p><img src="https://foody-app-copy.vercel.app/aboutUs/starGroup4.svg" alt="" /><span>7,4$</span></div>
              </div>

              <img src="https://foody-app-copy.vercel.app/aboutUs/rectangle.svg" alt="" id='about-img-bg' />

              <div className='about-item'>
               <div id="msg3" className='msg'><p>Tomato Soup</p> <img src="https://foody-app-copy.vercel.app/aboutUs/starGroup4.svg" alt="" /><span>7.90$</span></div>
              </div>

              <div className='about-item'>
                <div id="msg4" className='msg'><p>Papa Coffe</p> <img src="https://foody-app-copy.vercel.app/aboutUs/starGroup4.svg" alt="" /><span>1,70$</span></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About