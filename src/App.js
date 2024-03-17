import {useState } from 'react';
import './App.css';
import axios from 'axios';
import Expense from './Expense';

function App() {


    const [details, setDetails] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDetails(values => ({...values, [name]: value}))
      }
    

    const handleForm = async (e) => {
        e.preventDefault();
       const res = await axios.post("http://localhost:8000/expense", details);
       console.log(res.data);
     }

    
  return (
      <>
          <h1>Expense Tracker App</h1>

          <form onSubmit={handleForm} className='input-details'>
              <label>Amount:</label>
              <input type="number" name='amount' onChange={handleChange} size="30" required />
              <label>Description:</label>
              <input type="text" name='description' onChange={handleChange} size="30" required />
              <label>Category:</label>
              <select name='category' onChange={handleChange}>
                <option>Select</option>
              <option>Food</option>
              <option>Vacation</option>
              <option>Other</option>
              </select>
              <button type="submit" id="add-details">Add</button>
          </form>
   <br/>
          <div>
            <button id="leaderboard">Leaderboard</button>
            <button id="report">Report</button>
          </div>
          <br />
          <br />
           <Expense />
          
      </>
  );
}

export default App;
