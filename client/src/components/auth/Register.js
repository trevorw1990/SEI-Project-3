/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Nav from 'react-bootstrap/Nav'
import emailjs from 'emailjs-com'

const Register = () => {
  const history = useHistory()

  //* Form object state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  // const [newSubmitForm, setNewSubmitForm] = useState([])

  //*Get userInput
  const handleUserData = e => {
    const getUserData = { ...formData, [e.target.name]: e.target.value }
    const newErrors = { ...errors, [e.target.name]: '' }
    setFormData(getUserData)
    setErrors(newErrors)
  }


  //* Submit form as post request to backend
  const submitForm = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/Login')
      toast.success('You have succesfully registered!')
    } catch (err) {
      console.log(err)
      setErrors(err.response.data.errors)
      // console.log(err.response.data)
      toast.warning('Login failed')
    }
    console.log(e.target)
    emailjs.sendForm('service_1d8nn2d', 'template_l7eixym', e.target, 'user_00iebephTHbqzTXSqRbog')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }



  return (
    <>
      <ToastContainer />
      <section className="registerPage">

        <h1 className="register">Register</h1>
        <Container fluid="md" className="center-height animate__slideOutDown">
          <Row className="justify-content-md-center">
            <Col >
              <Form onSubmit={submitForm} className='register-form'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="username" type="text" placeholder="Enter username" value={formData.username} onChange={handleUserData} />
                  {/* {errors && <Form.Text className="text-danger">{errors.username.message}</Form.Text>} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleUserData} />
                  {/* {errors && <Form.Text className="text-danger">{errors.email.message}</Form.Text>} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" value={formData.password} onChange={handleUserData} />
                  {/* {errors && <Form.Text className="text-danger">{errors.password.message}</Form.Text>} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Please confirm your password</Form.Label>
                  <Form.Control name="passwordConfirmation" type="password" placeholder="Password Confirmation" value={formData.passwordConfirmation} onChange={handleUserData} />
                  {/* {errors && <Form.Text className="text-danger">{errors.passwordConfirmation.message}</Form.Text>} */}
                </Form.Group>

                <button type="submit">Submit</button>
              </Form>
            </Col>
          </Row>
          <Container fluid="md" className="center-height animate__slideOutDown">
            <div className="option">
              <h1 id="option">Or</h1>
              <Container fluid="md" className="center-height animate__slideOutDown">
                {/* login */}
                <div className="login">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Please login instead!</Form.Label>
                    <Nav.Link className="text-style-color" eventKey={2} href="/login"> <button className="Log">Login</button></Nav.Link>
                  </Form.Group>
                </div>
              </Container>
            </div>
          </Container>

        </Container>

      </section>
    </>
  )
}

export default Register
