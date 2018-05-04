import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
  render() {
    let productsToDisplay = this.props.inventory.map(elem => <Product key={elem.id} product={elem}/>)
    return(
      <div>
        <h1>I am Dashboard</h1>
        {productsToDisplay}
      </div>
    )
  }
}