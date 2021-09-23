import React from 'react'
import {BrowserRouter, Route,Switch} from "react-router-dom"

import "./App.css"
import Home from './components/Home/Home'
import LoginForm from './components/LoginForm/LoginForm'
import signUp from './components/Signup/signUp'







export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Switch>
      <Route exact path = "/login" component = {LoginForm} />
      <Route exact path = "/signup" component = {signUp} />
      <Route  path = "/" component = {Home}/>
      
      </Switch>
      </BrowserRouter>
      
      
    </div>
  )
}
