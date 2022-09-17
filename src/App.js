import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App(){
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [text, setText] = useState(1)
  const [cost, setCost] = useState(1)


  function handleselect(event){
    setCost(event.target.value)
    setText(1)
  }

  function onChange(event){
    setText(event.target.value)
  }

  
  useEffect (()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(resonponse=>resonponse.json())
    .then((json) =>{
      setCoins(json)
      setLoading(false)
    })
  }, [])
  
  

  return (
    <div>
      <h1>The coins</h1>
      {loading ? <strong>loading ...</strong> : null}
      <p>
        <select onChange={handleselect}>
          {coins.map(coin=> <option value={coin.quotes.USD.price}> {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</option>)}
        </select>
      </p>
      <p>
        <input onChange={onChange} value={text} type='text' placeholder='how convert...'></input>       
      </p>
      <h2>you can get {text/cost}</h2>
    </div>
  )
}

export default App;
