import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'
import Home from './components/Home.js'
import Navigation from './components/Navigation.js'
import Arts from './components/products/Arts.js'
import Tech from './components/products/Tech.js'
import ProfileForm from './components/profile/ProfileForm.js'
import Footer from './components/Footer.js'
import Overview from './components/products/Overview.js'
import Thanks from './components/Popups/Thanks.js'
import Profile from './components/profile/Profile.js'
// import useLocalStorage from './components/hooks/useLocalStorage.js'


const App = () => {
 


  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/thanks"  component={Thanks}/>
        <Route path="/products" component={Overview}/>
        <Route path="/arts"component={Arts}/>
        <Route path="/tech"component={Tech}/>
        <Route path="/art" component={Profile} />
        <Route path="/profile" component={ProfileForm} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App

