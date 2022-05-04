/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../auth/helpers/auth'
import { useHistory } from 'react-router'


const ProfileForm = () => {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory()
  const [artData, setArtData] = useState({
    name: '',
    image: '',
    artist: '',
    age: '',
    category: '',
  })
  
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    history.push('/art')
    try {
      await axios.post('/api/profile', artData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
    
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    const newArt = { ...artData, [event.target.name]: event.target.value }
    setArtData(newArt)
    console.log(newArt)
  }
  const handleUpload = async () => {
    try {
      await axios.post('https://api.cloudinary.com/v1_1/inetab/image/upload', artData.image, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="background-color">
      <div className="form-container text-monospace">
        <Form  className="animate__animated animate__zoomIn"onSubmit={handleSubmit}>
          <h3 className="art-form">Create your Art Profile</h3>
          <Form.Group className="form-row">
            <Col xs={7}>
              <Form.Label>Art Name</Form.Label>
              <Form.Control onChange={handleChange} name="name" value={artData.name} placeholder="Your product name" required/>
            </Col>
            <Col xs={7}>
              <Form.Label>category</Form.Label>
              <Form.Control onChange={handleChange} name="category" value={artData.category}placeholder="Your product type"  required/>
            </Col>
          </Form.Group>
          <Form.Group className="form-row" controlId="artist">
            <Col xs={2}>
              <Form.Label>Artist</Form.Label>
              <Form.Control  onChange={handleChange} name="artist" value={artData.name} as="select" defaultValue="artist" required>
                <option>Either</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Col>
            <Form.Group controlId="formGridAge">
              <Col xs={5}>
                <Form.Label>Age</Form.Label>
                <Form.Control onChange={handleUpload} name="age" value={artData.age}/>
              </Col>
            </Form.Group>
         
          
            <Form.Group controlId="formGridAbout">
            
            </Form.Group>
          </Form.Group>
          <Button className="submit-button"type="submit">Submit</Button>

        </Form>
      </div>
    </div>
   
  )
}

export default ProfileForm
