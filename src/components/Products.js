import React, { Component } from 'react'
import QuickView from './QuickView'
import firebase from '../firebase'

class Products extends Component {
	constructor() {
		super()
		this.state = {
			products: [],
			quickViewShown: false
		}
	}

  
  // toggle the quickview open & close states
  // this is used for both the "Close" btn on the quickview div
  // and the 'QuickView' button on the product
	toggleQuickView = (productIndex) => {
		this.setState({
			quickViewShown: !this.state.quickViewShown,
			quickViewIndex: productIndex
		})
	}


	componentDidMount() {
		// create a variable that holds a reference to our database
		const dbRef = firebase.database().ref()

		// add an event listener to that variable that will fire
		// every time there is a change in the database.

    // this event listener takes a callback function which we will use to get
		// our data from the database, and call that data 'response'.
		dbRef.on('value', (response) => {

			// create a variable to store the new state we want to introduce to our app
      const newState = []

			// use Firebase's .val() method to parse our db info the way we want it
			const dataFromDB = response.val()

      // iterate through the data object to access he properties of each product
			for (let key in dataFromDB.products) {
				// push each product obj to an array
				newState.push(dataFromDB.products[key])
			}

			// update the component's state
			this.setState({
				products: newState
			})
		})
	}


	render() {
		return (
			<main>
				<section id="products" className="productsSection">
					<div className="wrapper">
            <div className="sectionTitle">
              <h1>Shop Our Products</h1>
            </div>
						<div className="productsContainer">
              {/* The component will map through the products array,
               grabbing any products it finds in there and display them as a
               list on the page. */}
							{this.state.products.map((product, index) => {
								return (
									<div key={index} className="productItem">
										<div className="productImgContainer">
											<img
												className="productImg"
												src={product.picture}
												alt={`A picture of a ${product.name}`}
											/>
										</div>

										<h3 className="productName">{product.name}</h3>
										<p className="productPrice">{product.price}</p>

										<div className="productBtnContainer">
                      <button
												className="quickViewBtn"
												onClick={() => this.toggleQuickView(index)}
											>
												Quickview
											</button>
											<button
												className="addBtn"
												onClick={() => this.props.addToCart(product)}
											>
												Add to Cart
											</button>
										</div>
										<div className="quickView">
                      {/* passing the product index to toggleQuickView function,
                       checking if the product index matches the quickViewIndex
                        this will trigger only the quickView div on the clicked
                        product to open (based on the index match)*/}
											{this.state.quickViewShown &&
											this.state.quickViewIndex === index ? (
												<QuickView
													name={product.name}
													description={product.description}
													price={product.price}
													size={product.size}
													picture={product.picture}
													onClick={() => this.toggleQuickView(index)}
												/>
											) : null}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</section>
			</main>
		)
	}
}

export default Products