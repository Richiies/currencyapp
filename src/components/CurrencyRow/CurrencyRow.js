import React, { useState } from 'react'
import "./index.css"

export default function CurrencyRow(props) {
    const {exchangeRates} = props
    const {rates} = exchangeRates
    

   console.log(rates.AED)
    
    const [firstInput, setfirstInput] = useState()
    const [secondInput, setsecondInput] = useState()
    const [input1, setinput1] = useState(1)
    const [input2, setinput2] = useState()
    const [fromCurrency, setfromCurrency] = useState()
    const [toCurrency, settoCurrency] = useState()

    let fromAmount = rates[firstInput]
    let toAmount = rates[secondInput] * fromAmount * fromCurrency

   
    
    
    

    
    



    
    
    return (
        <div className = "currencyconverter">
            <div className = "card-container">
            <h1>Currency Converter</h1>
            <div>
            <input  type ="number" value = {toAmount} onKeyUp = {e=>{settoCurrency(e.target.value)}}onChange = {e=>{setinput1(e.target.value)}} />
            <select onChange={e=>{setfirstInput(e.target.value)}}>
                {Object.keys(rates).map((key,value)=>(
                    <option key = {key}>{key}</option>
                ))}
            </select>
            </div>
            <div>
            <input  type ="number" value = {toAmount}  onChange = {e=>{setinput2(e.target.value)}}/>
            <select onChange={e=>{setsecondInput(e.target.value)}}>
                {Object.keys(rates).map((key,value)=>(
                    <option key = {key}>{key}</option>
                ))}
            </select>
            </div>
            </div>
            
        </div>
    )
}
