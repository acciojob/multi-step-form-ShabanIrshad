import Step from "./Step";
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [step,setStep]=useState(1);
  const [form,setForm]=useState({
    firstName:'',
    lastName:'',
    carModel:'',
    carPrice:'',
    cardInfo:'',
    expiryDate:''
  })
  const next=()=>setStep(step+1);
  const prev=()=>setStep(step-1);
  const handleSubmit=()=>{
    console.log(form,'Data submitted');
  }
  console.log(form," ",step);
  return (
    <div className="container">
      <Step step={step} form={form} setForm={setForm} nextStep={next} prevStep={prev} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App
