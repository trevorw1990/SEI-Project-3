import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainModal from '../Popups/MainModal'
import ProductCard from '../Popups/ProductCard'
import { Link } from 'react-scroll'

const Tech = () => {

  //* Smooth Scroll Properties

  //* tech Products
  const [products, setProducts] = useState([])
  const [deal, setDeal] = useState([])
  const [treats, setTreats] = useState([])
  const [modalInfo, setModalInfo] = useState([])
  const [show, setShow] = useState(false)
  // const [localStorageItem, setLocalStorageItem] = useState([])
  const handleClose = () => setShow(false)


  //* Fetch tech Products lol
  useEffect(() => {
    const getData = async () => {
      try {
        //* Fetching Data
        const { data } = await axios.get('/api/products')

        //* Grabbing all tech products
        const techProducts = data.filter(frame => frame.typeArt.toLowerCase() === 'tech')

        //* Filter to get treats and save to new array
        const techTreats = techProducts.filter(food => food.typeProduct.toLowerCase() === 'treat')

        //* Filter to get deals and save to new array
        const techDeal = techProducts.filter(food => food.typeProduct.toLowerCase() === 'deal')

        //* Set products to state
        setProducts(data)
        setTreats(techTreats)
        setDeal(techDeal)
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
      <div id="top" className="">
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
            price={info.price}
            id={info._id}
          // localStorageItem={localStorageItem}
          // setLocalStorageItem={setLocalStorageItem}
          />)}

        <h1 className="tech-title fw-bold text-monospace text-uppercase">Art</h1>
        <div className="product-options">

          <Link
            to="treats"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <button>Shop New <i className=""></i></button>
          </Link>

          <Link
            to="deals"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <button>Shop<i className=""></i></button>
          </Link>
          
        </div>
        <div className="tech-wrapper">
          <div className="deals-hero">
            <div className="hero-text">
              <h3> A one of a kind experience.</h3>
            </div>
            <img src="https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw3149d8b8/images/125107_125109_b.jpg?sw=626&sh=626&sm=cut" alt="" />
          </div>
          {/* <h2 className="tech-title">Deals</h2> */}
          <div id="" className="">
            {deal.map(food =>
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
          {/* Treats */}
          <div className="deals-hero">
            <div className="hero-text">
              <h3>.</h3>
            </div>
            <img id="img-two" src="" alt="" />
          </div>
          <div id="treats" className="toTop">
            <Link
              to="top"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
            >
              <i className="fas fa-arrow-circle-up"></i>
            </Link>
          </div>
          <div className="tech-deal">
            {treats.map(food =>
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

export default Tech