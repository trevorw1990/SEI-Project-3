/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {
  const history = useHistory()
  const [errors, setError] = useState(false)
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newLoginData = { ...loginData, [event.target.name]: event.target.value }
    setloginData(newLoginData)
  }
  // console.log('newLoginData', newLoginData)
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
    console.log('TOKEN', token)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/Login', loginData)
      console.log(data)
      console.log(loginData)
      setTokenToLocalStorage(data.token)
      history.push('/products')
      toast.success(`${data.message}`)
    } catch (err) {
      setError(true)
    }
  }


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="loginPage">

        <h1 className="login">Login</h1>
        <Container fluid="md" className="center-height animate__slideOutDown">
          <Row className="justify-content-md-center">
            <Col >
              <Form onSubmit={handleSubmit} className='login-form'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Enter email" value={loginData.email} onChange={handleChange} />
                  {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" value={loginData.password} onChange={handleChange} />
                  {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
                </Form.Group>
                <button type="submit" className="button is-fullwidth is-warning">LogIn!</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Login