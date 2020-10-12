import React, { Component } from 'react'
import './App.css'

// import the other components
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'


class App extends Component {
	constructor() {
		super()
		this.state = {
      cart: [],
      newCart: []
		}
  }


	// update the cart state
	// this will be triggered on 'Add to Cart' btn click in Products.js
	addToCart = (product) => {
		let cartCopy = [...this.state.cart]
		cartCopy.push(product)

    return this.setState({
      cart: cartCopy,
      newCart: cartCopy
    })
	}


	render() {
		return (
			<div>
				<Header cart={this.state.newCart}/>
				<Products addToCart={this.addToCart}/>
				<Footer/>
			</div>
		)
	}
}

export default App
