import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainModal from '../Popups/MainModal'
import ProductCard from '../Popups/ProductCard'
import { Link } from 'react-router-dom'



const Overview = () => {
  //* art and tech State
  const [artProducts, setartProducts] = useState([])
  const [techProducts, settechProducts] = useState([])
  const [products, setProducts] = useState([])
  const [modalInfo, setModalInfo] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)


  //* Fetch Products from DB.
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')

        // displayed data 
        const onDisplay = data.filter(item => item.onDisplay)
        setProducts(onDisplay)
        // art data
        const artItems = onDisplay.filter(frame => frame.typeArt.toLowerCase() === 'art')
        setartProducts(artItems)

        // tech data
        const techItems = onDisplay.filter(frame => frame.typeArt.toLowerCase() === 'tech')
        settechProducts(techItems)

      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  //* Open Modal
  const openModal = e => {
    const userInput = e.target.id
    const filterArray = products.filter(prod => userInput === prod._id)
    setModalInfo(filterArray)
    setShow(true)
  }




  return (
    <>
      {/* Product Info Modal */}

      {modalInfo.map(info =>
        <MainModal
          show={show}
          handleClose={handleClose}
          key={info._id}
          name={info.name}
          image={info.image}
          shortDescription={info.shortDescription}
          description={info.description}
          design={info.design}
          storage={info.storage}
          id={info._id}
          price={info.price}
        // localStorageItem={localStorageItem}
        // setLocalStorageItem={setLocalStorageItem}
        />)}

      <div className="">
        

        <div className="tech-wrapper">
          <div className="deals-hero">
            <div className="hero-overview">
              <h3>State of the Art <Link to="/arts"><span className="art-link">Shop Tech</span></Link></h3>
              <p className="text-monospace text-center">
                
              </p>
            </div>
            <img src="https://store.moma.org/on/demandware.static/-/Sites-moma-Library/default/dw66f60f55/images/opt/201910_landing_forthehome_d.jpeg" alt="" />
          </div>
        </div>

       

        <div className="tech-wrapper">
          <div className="tech-deal">
            {artProducts.map(food =>
              <ProductCard
                key={food._id}
                name={food.name}
                image={food.image}
                id={food._id}
                shortDescription={food.shortDescription}
                openModal={openModal}
              />
            )}
          </div>
        </div>
      </div>

      <div className="navy-banner">
      </div>

      <div className="tech-page tech-section">
        <div className="tech-wrapper">
          <div className="deals-hero">
            <div className="hero-overview">
              <h3>Get Creative with Your Home & Office <Link to="/tech"><span className="tech-link">Shop Art</span></Link></h3>
              <p className="text-monospace text-center">
               
              </p>
            </div>
            <img src="https://store.moma.org/on/demandware.static/-/Sites-moma-Library/default/dw8d3633e3/images/Difference_Hero_Desktop_v5.jpg" alt="" />
          </div>
        </div>

        <h3 className="overview-title text-monospace">🎨</h3>
        <div className="tech-wrapper">
          <div className="tech-deal">
            {techProducts.map(food =>
              <ProductCard
                key={food._id}
                name={food.name}
                image={food.image}
                id={food._id}
                shortDescription={food.shortDescription}
                openModal={openModal}
              />
            )}
          </div>
        </div>

      </div>



    </>
  )
}

export default Overview
