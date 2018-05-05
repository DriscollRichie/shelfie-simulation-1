import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: '',
      priceInput: 0,
      imageInput: '',
      selectedProduct: null
    }
    this.clearInputs = this.clearInputs.bind(this)
  }

  handleNameChange(e) {
    this.setState({nameInput: e})
  }

  handlePriceChange(e) {
    this.setState({priceInput: e})
  }

  handleImageChange(e) {
    this.setState({imageInput: e})
  }

  clearInputs() {
    this.setState({nameInput: '', priceInput: 0, imageInput: ''})
  }

  componentDidUpdate(oldProps) {
    if (oldProps.selectedProduct  !== this.state.selectedProduct) {
      
    }
  }

  postProduct(name, price, image) {
    axios.post('/api/product', {name, price, image}).then(res => {
      this.props.getInventoryFn()
      this.clearInputs()
    })
  }

  render() {
    return(
      <div>
        <input placeholder='Product Name' onChange={(e) => this.handleNameChange(e.target.value)} value={this.state.nameInput}/>
        <input placeholder='Price' onChange={(e) => this.handlePriceChange(e.target.value)} value={this.state.priceInput}/>
        <input placeholder='Image URL' onChange={(e) => this.handleImageChange(e.target.value)} value={this.state.imageInput}/>
        <button onClick={() => this.postProduct(this.state.nameInput, this.state.priceInput, this.state.imageInput)}>Add</button>
        <button onClick={this.clearInputs}>Cancel</button>
      </div>
    )
  }
}