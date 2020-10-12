import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'


class Cart extends Component {
	constructor() {
		super()
		this.state = {
			isCartOpen: false
		}
	}

  // toggle open and close state of the cart
	toggleCart = () => {
    this.setState({
      isCartOpen: !this.state.isCartOpen
    })
  }


	// get the length of the cart array & use to update the qty count in the cart
	getCartLength = () => {
		return this.props.cart.length
	}


	// get the subtotal $ value in the cart
	getCartSubtotal = () => {
    let cartSubtotal = 0

    // function to iterate over each item in cart
    // get the price for each item and return a single output
    const reducer = ((accumulator, currentValue) => {
      // convert the string to a floating number
      // substring - starts at index 1, the fist ch in price is $
      currentValue = parseFloat(currentValue.price.substring(1))
      return accumulator + currentValue
    })

    cartSubtotal = this.props.cart.reduce(reducer, 0).toFixed(2)
      return cartSubtotal
	}


  render() {
    return this.state.isCartOpen ? (
			<div className="cartContainer">
				<div className="wrapper">
					<div className="cartCloseContainer">
						<button
							className="cartCloseBtn"
							onClick={this.toggleCart}
							aria-label="Close the shopping cart window."
						>
							<FontAwesomeIcon icon={faTimes} aria-hidden="true" />
						</button>
					</div>
					<div className="cartTopContent">
						<h2>Your cart</h2>
						<h4 className="itemsQtyInCart">
							{this.getCartLength()} item (s) in cart
						</h4>
					</div>

					{this.props.cart.map((product, index) => {
						return (
							<>
								<div className="itemInCart">
									<div className="itemImgInCart">
										<img
											src={product.picture}
											alt={`A picture of a ${product.name}`}
										/>
									</div>
									<div className="itemInfoInCart">
										<h4>{product.name}</h4>
										<p>{product.price}</p>
									</div>
								</div>
							</>
						)
					})}
					<div className="cartBottomContent">
						<div className="subtotalInCart">
							<h4>Your Total: ${this.getCartSubtotal()}</h4>
						</div>
						<div className="buyBtnContainer">
							<a
								className="buyBtn"
								href="https://www.etsy.com/ca/shop/PampasGrassThinker?ref=simple-shop-header-name&listing_id=829497892"
							>
								Buy Now
							</a>
						</div>
					</div>
				</div>
			</div>
		) : (
			<>
				<span className="cartQty">{this.getCartLength()}</span>
				<button
					className="shoppingCart"
					aria-label="Shopping Cart"
					onClick={this.toggleCart}
				>
					<FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />
				</button>
			</>
		)
  }
}

export default Cart