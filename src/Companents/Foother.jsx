import React from 'react'

function Foother() {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3  col-md-6">
            <div className="col-12"> <div className="logo"> <h4>Foody <span id='dot'>.</span></h4></div></div>
            <div className="col-12"><h6>Lorem ipsum is placeholder text commonly used in the graphic,</h6></div>
            <div className="col-12"><img src="https://foody-app-copy.vercel.app/clientFooter/facebook.svg" alt="facebook" /> <img src="https://foody-app-copy.vercel.app/clientFooter/instagram.svg" alt="instagram" id='yellow-icon'/> <img src="https://foody-app-copy.vercel.app/clientFooter/twitter.svg" alt="twiter" /></div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="col-12"><h4>Popular</h4></div>
            <div className="col-12"><h6>Programming</h6></div>
            <div className="col-12"><h6>Books for Children</h6></div>
            <div className="col-12"><h6>Psychology</h6></div>
            <div className="col-12"><h6>Business</h6></div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="col-12"><h4>Cash</h4></div>
            <div className="col-12"><h6>Delivery</h6></div>
            <div className="col-12"><h6>Payment</h6></div>
            <div className="col-12"><h6>About the Store</h6></div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="col-12"><h4>Help</h4></div>
            <div className="col-12"><h6>Contact</h6></div>
            <div className="col-12"><h6>Purchase Returns</h6></div>
            <div className="col-12"><h6>Buyer Help</h6></div>
          </div>
        </div>
      </div>
    </footer>
         <div className="fot-botm">   <p>All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy</p></div>
         </>
  )
}

export default Foother