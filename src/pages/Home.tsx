import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className=" bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('tamara-bellis-JeakE5SZCug-unsplash.jpg')`, height: '80vh' }}>
          <p></p>
        </div>
        <div className="h-screen container mx-auto px-4">
          <h1 className="text-4xl text-center mt-8">Welcome to our store</h1>
          <p className="text-center mt-4">We have the best products in the market</p>
        </div>
      </>
    )
  }
}

export default Home