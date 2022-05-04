import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ProductLogin = () => {

  //* Product State
  const [products, setProducts] = useState([])

  //* Modal States & Functions
  const [modalInfo, setModalInfo] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  //* Show Modal Lists - design & Storage
  const [showIngred, setShowIngred] = useState(false)
  const [showStorage, setShowStorage] = useState(false)

  //* Dropdown frame Type State
  const [frameType, setFrameType] = useState([])


  //* Fetch Products from DB.
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/products')
      console.log(data)
      setProducts(data)
    }
    getData()
  }, [])

  //? Open Modal
  const openModal = e => {
    const userInput = e.target.id
    const filterArray = products.filter(prod => userInput === prod._id)
    setModalInfo(filterArray)
    setShow(true)
  }

  //? Open designs List 
  const handleShowIngred = () => {
    setShowIngred(true)
  }

  //? Close designs List
  const handleCloseIngred = () => {
    setShowIngred(false)
  }

  //? Open Storage List 
  const handleShowStorage = () => {
    setShowStorage(true)
  }

  //? Open Storage List
  const handleCloseStorage = () => {
    setShowStorage(false)
  }

  //? User Input from tech/art select
  const handleChange = e => {
    const userInput = e.target.value
    const filteredArray = products.filter(prod => userInput === prod.typeArt.toLowerCase())
    if (userInput === 'all') {
      setFrameType(products)
    } else {
      setFrameType(filteredArray)
    }
    

  }



  return (
    <>
      <form>
        <Form.Group controlId="formBasicSelect" size="small">
          <Form.Label>Filter type of frame</Form.Label>
          <Form.Control
            as="select"
            size="small"
            onChange={handleChange}
          >
            <option value="all">Select type</option>
            <option value="art">art</option>
            <option value="tech">tech</option>
          </Form.Control>
        </Form.Group>
      </form>



      {/* MODAL-SIDEBAR */}
      {modalInfo.map(prod =>
        <>
          <Modal key={prod._id} show={show} onHide={handleClose}
            // dialogClassName="my-modal"
            size="lg">
            <div className="modal-body-prod">
              <img src={prod.image} alt={prod.name} />
              <h1>{prod.name}</h1>
              <p>{prod.shortDescription}</p>
              <p>{prod.description}</p>
              <hr />
              <div className="extra-info">
                <div className="header-extra">
                  <h2>designs</h2>
                  {/* {!showIngred && <button onClick={handleShowIngred}>+</button>} */}
                  {!showIngred && <i onClick={handleShowIngred} className="fas fa-plus"></i>}
                  {showIngred && <i onClick={handleCloseIngred} className="fas fa-minus"></i>}
                </div>
                {showIngred && <div className="extra-list">
                  <ul>
                    {prod.design.map(design =>
                      <li key={design}>{design}</li>
                    )}
                  </ul>
                </div>}
              </div>
              <hr className="dotted-hr" />
              <div className="extra-info">
                <div className="header-extra">
                  <h2>Storage</h2>
                  {!showStorage && <i onClick={handleShowStorage} className="fas fa-plus"></i>}
                  {showStorage && <i onClick={handleCloseStorage} className="fas fa-minus"></i>}
                </div>
                {showStorage && <div className="extra-list">
                  <p>{prod.storage}</p>
                </div>}
              </div>
              <hr />
              <div className="my-modal-footer">
                <div className="price">
                  <i className="fas fa-tags"></i>
                  <p>£ {prod.price}</p>
                </div>
                <div className="right-btn">
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    <i className="fas fa-shopping-basket"></i>
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}



      {/* CARD WRAPPER */}
      <div className="products">
        <div className="wrapper">
          {(frameType.length > 0 ? frameType : products).map(prod =>
            //* CARD
            <div key={prod._id} className="card">
              <div className="image">
                <img src={prod.image} alt={prod.name} />
              </div>
              <div className="card-title">
                <h2>{prod.name}</h2>
              </div>
              <div className="card-descript">
                <p>{prod.shortDescription}</p>
              </div>
              <div className="card-icons">
                <div className="left-icons">
                  <i className="fas fa-fish"></i>
                  <i className="fas fa-carrot"></i>
                  <i className="fas fa-egg"></i>
                </div>
                <div className="right-icon">
                  <button onClick={openModal} id={prod._id} >See Info</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductLogin
