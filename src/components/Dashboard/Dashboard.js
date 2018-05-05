import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`).then(res => {
      this.props.getInventoryFn();
    });
  }

  render() {
    let productsToDisplay = this.props.inventory.map(elem => (
      <Product
        key={elem.id}
        product={elem}
        deleteProductFn={this.deleteProduct}
      />
    ));
    return <div>{productsToDisplay}</div>;
  }
}
