import React, { useState } from 'react'
import CurrencyRow from '../CurrencyRow/CurrencyRow'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import exchangeRates from '../../exchangeRates'
import "./index.css"






export default function Home(props) {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    
    

    return (
        <div className="Home-container">
            <Header isLoggedIn = {isLoggedIn} setisLoggedIn = {setisLoggedIn} />
            <div>
                <CurrencyRow exchangeRates = {exchangeRates} />
            </div>

            <div className = "footerbottom" >
                <Footer />
            </div>
        </div>
    )
}
