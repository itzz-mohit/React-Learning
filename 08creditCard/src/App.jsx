import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Senorita");
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState(123);

  return (
    <>
      <div id="wrapper">
        <div id="left">
          <div id="front">
            <h3 id="card-number">{cardNumber}</h3>
            <h4 id="name">{name}</h4>
            <h4 id="expiry">
              {month}/{year}
            </h4>
          </div>
          <div id="back">
            <div id="strap"></div>
            <div id="cvc">{cvc}</div>
          </div>
        </div>

        <div id="right">
          <div id="form-div">
            <form>
              <label>Cardholder Name</label>
              <input
                type="text"
                placeholder="cardholder name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Card Number</label>
              <input
                type="text"
                placeholder="card number"
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <label>Month</label>
              <input
                type="text"
                placeholder="MM"
                onChange={(e) => setMonth(e.target.value)}
              />
              <label>Year</label>
              <input
                type="text"
                placeholder="YY"
                onChange={(e) => setYear(e.target.value)}
              />
              <label>CVC</label>
              <input
                type="number"
                placeholder="CVC"
                onChange={(e) => setCvc(e.target.value)}
              />
              <button type="button">Proceed</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
