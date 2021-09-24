import React from 'react'
import {BrowserRouter, Route,Switch} from "react-router-dom"

import "./App.css"
import About from './components/About/About'
import ForgotPassword from './components/Forgotpassword/ForgotPassword'
import Home from './components/Home/Home'
import LoginForm from './components/LoginForm/LoginForm'
import NotFound from './components/NotFound/NotFound'
import signUp from './components/Signup/signUp'







export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Switch>
      <Route exact path = "/login" component = {LoginForm} />
      <Route exact path = "/signup" component = {signUp} />
      <Route exact path = "/forgotpassword" component = {ForgotPassword} />
      <Route exact path = "/about" component ={About} />
      <Route exact path = "/" component = {Home}/>
      <Route component={NotFound} />
      
      </Switch>
      </BrowserRouter>
      
      
    </div>
  )
}
