import React, { useState } from 'react'
import nextId from 'react-id-generator'
import Modal from 'react-bootstrap/Modal'
import useLocalStorage from '../hooks/useLocalStorage'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import { getTokenFromLocalStorage } from '../tokens/token'

const MainModal = ({ id, image, name, shortDescription, description, price, show, handleClose }) => {
  //* Show Modal Lists - Design & Storage
  
  const [, ] = useState(false)
  const [localStorageItem, setLocalStorageItem] = useLocalStorage('items', [])
  const history = useHistory()




  //* Add to basket
  const saveEventIDToLocalStorage = e => {
    if (!window.localStorage.getItem('token')) {
      console.log('your are not logged in')
      history.push('/login')
    } else {
      const newID = nextId()
      const newLocalStorageItems = [...localStorageItem, { name: e.target.name, price: e.target.value, id: e.target.id, itemId: newID }]
      setLocalStorageItem(newLocalStorageItems)
      toast.success('Item has been added to the basket ✅')
    }
  }




  return (
    <>
      <ToastContainer />
      <Modal key={id} show={show} onHide={handleClose}
        // dialogClassName="my-modal"
        size="lg">
        <div className="modal-body-prod text-monospace">
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p>{shortDescription}</p>
          <p>{description}</p>
          
          <div className="my-modal-footer">
            <div className="price">
              <i className="fas fa-tags"></i>
              <p>£ {price}</p>
            </div>
            <div className="right-btn">
              <button className="modal-button" onClick={handleClose}>
                Close
              </button>
              <button className="modal-button buy" id={id} name={name} value={price} onClick={saveEventIDToLocalStorage}>
                {/* <i className="fas fa-shopping-basket" ></i> */}
                Buy me
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default MainModal
