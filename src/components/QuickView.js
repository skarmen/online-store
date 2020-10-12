import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class QuickView extends Component {
  constructor() {
    super()
  }

  render() {
    return (
			<div className="quickViewContainer">
				<div className="wrapper">
					<div className="quickViewCloseContainer">
						<button
							className="quickViewCloseBtn"
							onClick={this.props.onClick}
							aria-label="Close the quickview window."
						>
							<FontAwesomeIcon icon={faTimes} aria-hidden="true" />
						</button>
					</div>
					<div className="quickViewContent">
						<div className="quickViewProductImgContainer">
							<img
								className="quickViewProductImg"
								src={this.props.picture}
								alt={`A picture of a ${this.props.name}`}
							/>
						</div>

						<h3 className="quickViewProductName">{this.props.name}</h3>
						<p className="quickViewProductDescription">
							Product Description: {this.props.description}
						</p>
						<p className="quickViewProductPrice">Price: {this.props.price}</p>
						<p className="quickViewProductSize">Size: {this.props.size}</p>
					</div>
				</div>
			</div>
		)
  }
}

export default QuickView