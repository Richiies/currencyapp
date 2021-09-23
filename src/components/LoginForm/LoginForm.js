import {Component} from 'react'
import { Link } from 'react-router-dom'
import {GoogleLogin} from "react-google-login"
import './index.css'

import Footer from '../Footer/Footer'
import userDetails from '../../Userdetails'
import Cookies from "js-cookie"




class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMessage: '',
  }
   

  responseGoogle = (response) => {
    const {history} = this.props
      console.log(response)
    console.log(response.profileObj);
    
    history.replace('/')

  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    Cookies.set("jwt-token", "akdjhsjdh", {expires :30})

    

    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    
    const user = userDetails.find(user=> user.username === username && user.password === password  )
    let userlogin = JSON.stringify(user)
    if (username!=="" && password!=="") {
      this.onSubmitSuccess()
      localStorage.setItem("user", userlogin )
    } else {
      this.onSubmitFailure("error")
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }
  

  renderUsernameField = () => {
    const {username} = this.state


    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError} = this.state
    return (
      <>
      <h1 className = "currencylogin">Currency Login </h1>
      
      <div className="login-form-container">
        
        <img
          src="https://previews.123rf.com/images/bragapictures/bragapictures1901/bragapictures190100287/117191901-alphabet-of-currency-symbols-of-different-countries-set-of-world-currency-symbols-with-national-flag.jpg"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://previews.123rf.com/images/bragapictures/bragapictures1901/bragapictures190100287/117191901-alphabet-of-currency-symbols-of-different-countries-set-of-world-currency-symbols-with-national-flag.jpg"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <h1
            className="login-website-logo-desktop-image"
            >CURRENCY 
          </h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          {showSubmitError && <p className="error-message">*Required</p>}
          <button type="submit" className="login-button">
            Login
          </button>
          <div className = "signup">
          <Link to = "/signup" ><button type="button" className="login-button Signupbtn" >Signup</button></Link>
            
            <GoogleLogin className = "google-auth"
                clientId="886488183759-6bod4tothebd4mtmv8r8juvdgo7jg9dj.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
          
          
        </form>
        
        
      </div>
      <Footer />
      </>
    )
  }
}

export default LoginForm