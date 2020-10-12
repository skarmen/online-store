import React from 'react'

const Footer = () => {
  return (
    <footer id="contact">
      <div className="wrapper">
        <div className="footerContainer">
          <p>
            &copy; 2020 Karmen Salim
							<a href="https://junocollege.com/" className="junoFooterLink">
              <span> | Created at Juno College</span>
            </a>
          </p>
          <p>
            All images and products &copy;
							<a
              href="https://www.etsy.com/ca/shop/PampasGrassThinker?ref=simple-shop-header-name&listing_id=829497892"
              target="_blank"> PampasGrassThinker</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer