import React, { useEffect, useState } from 'react'
import { Modal, Image, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'




const BasketModal = () => {
  const [smShow, setSmShow] = useState(false)
  const [basketInfo, setBasketInfo] = useState([])
  const [subTotal, setSubtotal] = useState([])
  const history = useHistory()

  //* Show items in basket
  const handleBasketChange = () => {
    setSmShow(true)
    const items = localStorage.getItem('items')
    if (!items) {
      setBasketInfo([])
    } else {
      setBasketInfo(JSON.parse(items))
    }
  }

  //* Delete item from basket
  const handleDelete = (e) => {
    const userInput = e.target.id
    const newLocalStore = basketInfo.filter(ite => ite.itemId !== userInput)
    setBasketInfo(newLocalStore)
    window.localStorage.setItem('items', JSON.stringify(newLocalStore))
    toast.warning('Item has been removed')
  }


  //* Calculcate Totals
  useEffect(() => {
    const getNumbers = basketInfo.map(ite => parseFloat(ite.price))
    const subTotalArray = getNumbers.reduce((a, b) => a + b, 0)
    setSubtotal(subTotalArray.toFixed(2))
  }, [basketInfo])



  //* Purchase and clear all items in basket
  const checkout = () => {
    const blank = []
    if (basketInfo.length === 0) {
      toast.warning('oops you have nothing in your basket..')
    } else {
      window.localStorage.setItem('items', JSON.stringify(blank))
      setBasketInfo(blank)
      setSmShow(false)
      history.push('/thanks')
      toast.success('Success! Your order is being processed! 🐶')
    }
  }


  return (
    <>
      <ToastContainer />
      <Nav.Link onClick={handleBasketChange}><i className="fas fa-shopping-bag"></i></Nav.Link>
      <Modal
        className="bg-transparent"
        size="m"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <Image src="https://cdn.iconscout.com/icon/premium/png-256-thumb/check-card-security-4429770-3675200.png" />
            <h1>Your Shopping Cart</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {basketInfo.map(info =>
            <>
              <div key={info.id} className="basket-item">
                <div className="item-info">
                  <p>{info.name}</p>
                  <i className="fas fa-tags">  {info.price}</i>
                </div>
                <button id={info.itemId} onClick={handleDelete}>x</button>
              </div>
              <hr />
            </>
          )}
          <div className="totals">
            <p>subtotal: <span className="subtotal">{((subTotal / 100) * (100 - 20)).toFixed(2)}</span></p>
            <p>vat: 20%</p>
            <p>total: <span className="totalAmount">{subTotal}</span></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={checkout} className="checkout">
            Checkout
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BasketModal