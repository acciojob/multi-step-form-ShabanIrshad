import React, { useState } from "react";
 
const Step = ({ formData, setFormData }) => {
  const [formStatus, setFormStatus] = useState("");
 
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
 
  function firstFormNext(e) {
    e.preventDefault();
    setFirst(false);
    setSecond(true);
  }
 
  function secondFormNext(e) {
    e.preventDefault();
    setSecond(false);
    setThird(true);
  }
 
  function secondFormPre(e) {
    e.preventDefault();
    setSecond(false);
    setFirst(true);
  }
 
  function thirdFormPre(e) {
    e.preventDefault();
    setThird(false);
    setSecond(true);
  }
 
  function cardNumberfun(value) {
    if (value.length != 12) return false;
 
    let bool = true;
    for (let i = 0; i < value.length; i++) {
      if (!(value[i] >= 0 && value[i] <= 9)) {
        bool = false;
        break;
      }
    }
    if (!bool) return false;
    return true;
  }
 
  function storeNumber(e) {
    let value = e.target.value;
    setFormData({ ...formData, cardNumber: value });
    if (cardNumberfun(value)) {
      console.log("12");
      setFormData({ ...formData, cardCheck: "" });
    } else {
      setFormData({
        ...formData,
        cardCheck: "Credit Card Number must be exactly 12 digits along",
      });
    }
  }
 
  function checkDatafun(value) {
    const parts = value.split("/");
    if (parts.length !== 2) return false;
    const mm = parts[0];
    const yy = parts[1];
    if (mm.length !== 2 || yy.length !== 2) return false;
    if (isNaN(mm) || isNaN(yy)) return false;
    const month = Number(mm);
    if (month < 1 || month > 12) return false;
    return true;
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    setThird(false);
    setFormStatus("form successfully");
  }
 
  function storeDate(e) {
    let value = e.target.value;
    setFormData({ ...formData, date: value });
    if (checkDatafun(value)) {
      setFormData({ ...formData, checkData: "" });
    } else {
      setFormData({
        ...formData,
        checkData: "Expiration date must be in the format MM/YY",
      });
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <div id="step1">
        {first && (
          <div>
            <h1>Customer Details</h1>
            First Name:
            <input id="first_name" />
            Last Name:
            <input id="last_name" />
            <button type="button" onClick={firstFormNext}>
              Next
            </button>
          </div>
        )}
      </div>
 
      <div id="step2">
        {second && (
          <div>
            <h1>Car Details</h1>
            Brand:
            <input id="model" />
            Model:
            <input id="car_price" />
            <button type="button" onClick={secondFormPre}>
              Previous
            </button>
            <button type="button" onClick={secondFormNext}>
              Next
            </button>
          </div>
        )}
      </div>
 
      <div id="step3">
        {third && (
          <div>
            <h1>Payment Details</h1>
            Credit Card Number:
            <input id="card_info" onChange={storeNumber} />
            <div>{formData.cardCheck}</div>
            Expiration Date:
            <input id="expiry_date" onChange={storeDate} />
            <div>{formData.checkData}</div>
            <button type="button" onClick={thirdFormPre}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </div>
      <p>{formStatus}</p>
    </form>
  );
};
 
export default Step;