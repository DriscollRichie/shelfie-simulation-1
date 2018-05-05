import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      selectedProduct: {}
    }
    this.getInventory = this.getInventory.bind(this)
  }

  getInventory() {
    axios.get('/api/inventory').then(res => this.setState({inventory: res.data}))
  }

  componentDidMount() {
    this.getInventory()
  }

  render() {
    return (
      <div>
        <Dashboard inventory={this.state.inventory} getInventoryFn={this.getInventory}/>
        <Form getInventoryFn={this.getInventory} selectedProduct={this.state.selectedProduct}/>
        <Header/>
      </div>
    );
  }
}

export default App;
