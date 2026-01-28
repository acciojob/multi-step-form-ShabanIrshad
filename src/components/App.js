import React, { useState } from "react";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Navigation handlers
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Submit handler
  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Multi-Step Form</h2>

      <Step
        step={step}
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
