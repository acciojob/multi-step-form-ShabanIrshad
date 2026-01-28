import React,{useState} from 'react';
import './../styles/App.css';
import Step from "./Step";
 
const App = () => {
 
 
  const [formData, setFormData] = useState({
    cardNumber : "",
    date : "",
    cardCheck : "",
    checkData : ""
 
  });
 
 
 
  return (
    <div>
 
    <Step
 
 
 
      formData={formData}
      setFormData={setFormData}
    />   
    </div>
  )
}
 
export default App