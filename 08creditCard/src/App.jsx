import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Senorita");
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState(123);
  const [nameError, setNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = e.target.elements.name.value.trim();
    const enteredCardNumber = e.target.elements.cardNumber.value.trim();
    const enteredMonth = e.target.elements.month.value.trim();
    const enteredYear = e.target.elements.year.value.trim();
    const enteredCvc = e.target.elements.cvc.value.trim();

    if (!isValidName(enteredName)) {
      setNameError("Invalid CardHolder Name");
      return;
    }

    // if (!isValidNumber(enteredCardNumber) || enteredCardNumber.length !== 16) {
    //   setCardNumberError("Invalid Card Number");
    //   return;
    // }

    if (!isValidNumber(enteredCardNumber) || enteredCardNumber.length !== 10) {
      setCardNumberError("Invalid Card Number");
      return;
    }
    
    if (!isValidNumber(enteredMonth)) {
      setMonthError("Invalid Month");
      return;
    }

    if (!isValidNumber(enteredYear)) {
      setYearError("Invalid Year");
      return;
    }

    if (enteredCvc.length !== 3) {
      setCvcError("Invalid CVC");
      return;
    }

    setNameError("");
    setName(enteredName);
    setCardNumberError("");
    setCardNumber(enteredCardNumber);
    setMonthError("");
    setMonth(enteredMonth);
    setYearError("");
    setYear(enteredYear);
    setCvcError("");
    setCvc(enteredCvc);

    formReset.current.reset();

    // const data = {
    //   cardHolderName: name,
    //   cardNumber: cardNumber,
    //   month: month,
    //   year: year,
    //   cvc: cvc,
    // };

    const data = {
      cardHolderName: enteredName,
      cardNumber: enteredCardNumber,
      month: enteredMonth,
      year: enteredYear,
      cvc: enteredCvc,
    };
    console.log(data);
  };

  const formReset = useRef(null);

  const isValidName = (str) => {
    return /^[A-Za-z]+$/.test(str);
  };

  const isValidNumber = (str) => {
    return /^\d+$/.test(str);
  };

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
            <form ref={formReset} onSubmit={handleSubmit}>
              <label>Cardholder Name</label>
              <input type="text" name="name" placeholder="cardholder name" />
              {<p className="error">{nameError}</p>}
              <label>Card Number</label>
              <input type="text" name="cardNumber" placeholder="card number" />
              {<p className="error">{cardNumberError}</p>}
              <label>Month</label>
              <input type="text" name="month" placeholder="MM" />
              <p className="error">{monthError}</p>
              <label>Year</label>
              <input type="text" name="year" placeholder="YY" />
              <p className="error">{yearError}</p>
              <label>CVC</label>
              <input type="number" name="cvc" placeholder="CVC" />
              <p className="error">{cvcError}</p>
              <button type="submit">Proceed</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
