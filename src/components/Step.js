import React from 'react';

const Step=({step,form,setForm,nextStep,prevStep,handleSubmit})=>{
    return (
        <>
            {step===1 && <>
            <form>
                <label for='first_name'>First Name</label><br></br>
                <input type='text' id='first_name' onChange={(e)=>setForm({...form,firstName:e.target.value})} placeholder='First Name'/><br></br>
                <label for='last_name'>Last Name</label><br></br>
                <input type='text' id='last_name' onChange={(e)=>setForm({...form,lastName:e.target.value})} placeholder='Last Name'/><br></br>
            </form></>}

            {step===2 && <form>
                <label for='model'> Car Model</label> <br></br>
                <input type='text' id='model' onChange={(e)=>setForm({...form,carModel:e.target.value})} placeholder='Car Model'/><br></br>
                <label for='car_price'>Car Price</label><br></br>
                <input type='text' id='car_price' onChange={(e)=>setForm({...form,carPrice:e.target.value})} placeholder='Car Price'/><br></br>
            </form> }

            {step===3 && <form>
                <label for='card_info'> Credit Card Number</label> <br></br>
                <input type='text' id='card_info' onChange={(e)=>setForm({...form,cardInfo:e.target.value})} placeholder='Card Number'/><br></br>
                <label for='expiry_date'>Expiration Date</label><br></br>
                <input type='date' id='expiry_date' onChange={(e)=>setForm({...form,expiryDate:e.target.value})} /><br></br>
            </form> }

            {step<=3 && <button onClick={nextStep}>Next</button>}
            {step>1 && < button onClick={prevStep}> Previous</button>}
            {step==3 && < button onClick={handleSubmit}> Submit</button>}

        </>
    );

}
export default Step;