import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../Popups/ProductCard'
import MainModal from '../Popups/MainModal'
import { Link } from 'react-scroll'



const Arts = () => {

  //* art Products 
  const [deals, setDeal] = useState([])
  const [treats, setTreats] = useState([])
  const [products, setProducts] = useState([])
  const [modalInfo, setModalInfo] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)


  //* Fetch artProducts from DB.
  useEffect(() => {
    const getData = async () => {
      try {
        //* Fetching data
        const { data } = await axios.get('/api/products')

        //* Grabbing all art products
        const artsProducts = data.filter(art => art.typeArt.toLowerCase() === 'art')
        const artTreat = artsProducts.filter(food => food.typeProduct.toLowerCase() === 'treat')
        const artDeal = artsProducts.filter(food => food.typeProduct.toLowerCase() === 'deal')

        //* Set products to state
        setTreats(artTreat)
        setDeal(artDeal)
        setProducts(artsProducts)
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
      <div id="top" className="art-page">
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

        <h1 className="tech-title text-uppercase fw-bold text-monospace">New Tech</h1>
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
            <button>Shop <i className=""></i></button>
          </Link>
        </div>
        <div className="tech-wrapper">
          <div className="deals-hero">
            <div className="hero-text">
              <h3>Improve your quality of life with innovative tech designs. Explore cutting-edge speakers, engaging games, workspace accessories and more.</h3>
            </div>
            <img src="https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw1231464a/images/157292_a.jpg?sw=626&sh=626&sm=cut" alt="art Food" />
          </div>
          
          <div id="deals" className="tech-deals">
            {deals.map(food =>
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
              <h3>Best Sellers</h3>
            </div>
            <img id="img-two" src="https://cdn.galleriesnow.net/wp-content/uploads/2021/02/ArtPassport-V3.jpg" alt="art Treats" />
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
export default Arts