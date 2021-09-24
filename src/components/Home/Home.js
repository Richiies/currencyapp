import React from 'react'
import CurrencyRow from '../CurrencyRow/CurrencyRow'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import exchangeRates from '../../exchangeRates'
import "./index.css"
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'






export default function Home(props) {

    const jwtToken = Cookies.get('jwt-token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  } else{
      

    return (
        <div className="Home-container">
            <Header  />
            <div>
                <CurrencyRow exchangeRates = {exchangeRates} />
            </div>

            <div className = "footerbottom" >
                <Footer />
            </div>
        </div>
    )
}
}