import React from "react";
import "./index.css"

class ForgotPassword extends React.Component {
    state = {
        email:""
    }

    reset() {
        const {history} = this.props
        if (this.state.email!==""){
            alert(`Password is sent to your email ${this.state.email}`);
            setTimeout(()=>{history.replace("/login")},1000)

        } else{
            alert("Please enter Email")
        }
        
    }

    render() {
        
        return (<div className="forgot-container">
        <div className = "f-card">
        <h1>Write your email</h1>
            <input type="email" onChange = {e=>{this.setState({email:e.target.value})}}/>
            <button onClick={this.reset.bind(this)}>Reset Password</button>
            </div>

        </div>)
    }
}

export default ForgotPassword