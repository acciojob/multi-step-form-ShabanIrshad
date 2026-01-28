import React from "react";

const Step = ({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit
}) => {
  return (
    <div>
      {/* STEP 1 */}
      {step === 1 && (
        <div id='step1'>
          <h3>Step 1: User Info</h3>

          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <br /><br />

          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div id='step2'>
          <h3>Step 2: Car Info</h3>

          <input
            id="model"
            type="text"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />

          <br /><br />

          <input
            id="car_price"
            type="number"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div id='step3'>
          <h3>Step 3: Payment Info</h3>

          <input
            id="card_info"
            type="text"
            placeholder="Card Information"
            value={formData.card_info}
            onChange={handleChange}
          />

          <br /><br />

          <input
            id="expiry_date"
            type="date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </div>
      )}

      <br /><br />

      {/* Navigation Buttons */}
      {step > 1 && (
        <button onClick={prevStep}>
          Previous
        </button>
      )}

      {step < 3 && (
        <button onClick={nextStep} style={{ marginLeft: "10px" }}>
          Next
        </button>
      )}

      {step === 3 && (
        <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Step;
