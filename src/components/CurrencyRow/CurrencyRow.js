import React from 'react'
import "./index.css"
import axios from "axios"

 class CurrencyRow extends React.Component {
    
    state = {
        result: null,
        fromCurrency: "EUR",
        toCurrency: "GBP",
        amount: 1,
        currencies: []
      }

      componentDidMount() {
        axios
          .get("http://api.exchangeratesapi.io/v1/latest?access_key=41f817e984ac15c67e3c097131d22bbc")
          .then(response => {
            const currencyAr = ["EUR"];
            for (const key in response.data.rates) {
              currencyAr.push(key);
            }
            this.setState({ currencies: currencyAr });
          })
          .catch(err => {
            console.log("oppps", err);
          });
      }
      convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
            // {I have acces only for Euro Base to corresponding currencies}
          axios
            .get(
              `http://api.exchangeratesapi.io/v1/latest?access_key=41f817e984ac15c67e3c097131d22bbc&base=${
                this.state.fromCurrency
              }&symbols=${this.state.toCurrency}`
            )
            .then(response => {
              const result =
                this.state.amount * response.data.rates[this.state.toCurrency];
              this.setState({ result: result.toFixed(5) });
            })
            .catch(error => {
              console.log("Opps", error.message);
            });
        } else {
          this.setState({ result: "You cant convert the same currency!" });
        }
      };
      selectHandler = event => {
        if (event.target.name === "from") {
          this.setState({ fromCurrency: event.target.value });
        } else {
          if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value });
          }
        }
      };
    
    

    
    



    
    render(){
        const {amount,toCurrency,result,fromCurrency} = this.state
        return (
            <div className = "currencyconverter">
                <div className = "card-container">
                <h1>Currency Converter</h1>
                
                <div className="From">
                <input
                    name="amount"
                    type="text"
                    value={this.state.amount}
                    onChange={event => this.setState({ amount: event.target.value })}
                />
                <select
                    name="from"
                    onChange={event => this.selectHandler(event)}
                    value={this.state.fromCurrency}
                >
                    {this.state.currencies.map(cur => (
                    <option key={cur}>{cur}</option>
                    ))}
                </select>
                <select
                    name="to"
                    onChange={event => this.selectHandler(event)}
                    value={this.state.toCurrency}
                >
                    {this.state.currencies.map(cur => (
                    <option key={cur}>{cur}</option>
                    ))}
                </select>
                <button className="convert-btn" onClick={this.convertHandler}>Convert</button>
                {this.state.result && <h3>{amount}{fromCurrency} = {result} {toCurrency}</h3>}
                </div>
                        
                        
                </div>
                
            </div>
        )
    }
    
}

export default CurrencyRow