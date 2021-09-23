import React, { useState } from 'react'
import userDetails from '../../Userdetails'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./index.css"

export default function SignUp(props) {
    const {history} = props
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [signuperror, setSignuperror] = useState(false)

    const onsubmitSignup = (e) =>{
        e.preventDefault()
        if (username !== "" && password !== ""){
            setSignuperror(false)
            if (username && password){
                userDetails.push({username,password})
                history.replace("/login")
                localStorage.setItem("user", JSON.stringify(userDetails))

            } else{
                setSignuperror(true)
            }
        }
    }
    return (
        <>
        <Header/>
        <div className = "Signup-container">
            <img src = "https://images-platform.99static.com//tSjq0JzUe3EcmSSvfq_BTHrlFbQ=/175x162:1037x1024/fit-in/500x500/99designs-contests-attachments/111/111370/attachment_111370236" alt = "signup-iamge"/>
            <div className = "signup-card">
                
                <form onSubmit = {onsubmitSignup} className = "signupform"> 
                    
                    <label htmlFor = "username">Username</label>
                    <input id = "username" type="text" value={username} onChange = {e=>{setUsername(e.target.value)}} />
                    
                        <label htmlFor = "password">Password</label>
                        <input id = "password" type = "password" value = {password} onChange = {e=>setPassword(e.target.value)} />
                    
                    <button type="submit">
                        Signup</button>
                        {signuperror? <p>Please enter the username and password</p>: null}

                </form>
            </div>
            
        </div>
        <Footer />
        </>
    )
}
