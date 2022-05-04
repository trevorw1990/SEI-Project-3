import React from 'react'

const ProductCard = ({ id, name, image, shortDescription, openModal }) => {
  return (
    <>
      <div key={id} className="tech-card">
        <img src={image} alt={name} />
        <div className="tech-card-body">
          <div className="tech-card-header">
            <h3 className="fw-bold">{name}</h3>
          </div>
          <hr />
          <div className="tech-card-description">
            <p>{shortDescription}</p>
          </div>
        </div>
        <footer className="tech-card-footer">
          <i className="fab fa-apple-pay" onClick={openModal} id={id}></i>
          <i className="fab fa-bitcoin" onClick={openModal} id={id}></i>
          <i className="fab fa-cc-visa" onClick={openModal} id={id}></i>
        </footer>
      </div>
    </>
  )
}

export default ProductCard
