import React from 'react'
import { Link } from 'react-router-dom'


const Thanks = () => {


  return (
    <>
      <div className="thanks-page">
        <div className="thanks">
          <h1 id="header-thanks">Purchase Confirmed!</h1>
          <Link to="/products"><p id="continue">Back to store</p></Link>
        </div>
      </div>
      <img className="party" src="" alt="" />
    </>
  )
}

export default Thanks