import React,  {useState} from 'react'
    
const Currency = () =>{
    const{currency} = useState('');
    const[newCurrency, setNewcurrency] = useState(budget);
    const handleNewCurrency = (event) => {
        setNewCurrency(event.target.value);
    }
    return     (
        <div>
            <select className='alert alert-primary'  onChange={(event) => setNewCurrency(event.target.value)}>
                <option defaultValue>Choose currency</option>
                <option value='$' name='$'>$ dollars</option>
                <option value='£' name='$'>£ pounds</option>
                <option value='€' name='€'>€ euros</option>
                <option value='₹' name='₹'>₹ Ruppee</option>
          </select>

          <p>{currency}</p>

        </div>
    ) 
   
};
export default Currency;
