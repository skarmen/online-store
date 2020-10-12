import React, { Component } from 'react'
import Cart from './Cart'

class Header extends Component {
	constructor() {
    super()
	}


	render() {
		return (
			<header>
				<nav className="desktopNav">
					<div className="wrapper">
						<div id="home" className="headerNav">
							<div className="headerNavLinks">
								<ul className="headerNavList">
									<li>
										<a href="#home">Home</a>
									</li>
									<li>
										<a href="#products">Products</a>
									</li>
									<li>
										<a href="#contact">Contact</a>
									</li>
								</ul>
							</div>
							<div className="headerCart">
								<Cart
									readCart={this.props.readCart}
									cart={this.props.cart}
								/>
							</div>
						</div>
					</div>
				</nav>

        {/* Mobile Nav  */}
        <nav className="mobileNav">
          <div className="mobileNavContainer">
            <div tabindex="0" className="menuToggle">

              {/* A hidden checkbox is used as click receiver,
                so you can use the :checked selector on it */}
              <input  type="checkbox" />

              {/* Spans acting as hamburger menu */}
              <span></span>
              <span></span>
              <span></span>

              <ul className="mobileMenuList">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="wrapper">
              <div className="headerCart">
                <Cart
                  readCart={this.props.readCart}
                  cart={this.props.cart}
                />
              </div>
            </div>
          </div>
        </nav>
			</header>
		)
	}
}

export default Header