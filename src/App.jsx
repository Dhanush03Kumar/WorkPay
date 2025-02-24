import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App(){
  const [hours,setHours] = useState("");
  const [rate,setRate] = useState("");
  const [overTimeEnabled,setOverTimeEnabled]=useState(false);
  const [overTimeHours,setOverTimeHours]=useState("");
  const [overTimeRate,setOverTimeRate]=useState("");
  const [error,setError]=useState("");
  const [total,setTotal] = useState(null);


  const calculateWage = () => {
    setError("");
    if(hours<0||rate<0||overTimeHours<0||overTimeRate<0){
      setError("Please enter valid positive non-zero hours/rate");
      setTotal(null);
      return;
    }else{
      const regularPay = hours*rate;
      const overTimePay = overTimeHours>0? (overTimeHours*rate*overTimeRate):0;
      setTotal(regularPay+overTimePay);
    }
  };



  return(
    <>
    <Header/>
    <div className="calculator-container">
      
      <h2>Daily wage Calculator</h2>
      <div className="input-group">
      <label>Working Hours </label>
      <input
      type="number"
      placeholder="Enter your working hour"
      value={hours}
      onChange={(e)=>setHours(e.target.value)}
      />
      </div>
      <div className="input-group">
      <label>Hourly Rate </label>
      <input
      type="number"
      placeholder="Enter your rate"
      value={rate}
      onChange={(e)=>setRate(e.target.value)}
      />
      </div>
      <div className="input-group checkbox-group">
      <label>
      <input
      type="checkbox"
      checked={overTimeEnabled}
      onChange={()=>setOverTimeEnabled(!overTimeEnabled)}
      />Did overtime?</label>
      </div>
      {overTimeEnabled&& (
      <>
      <div className="input-group">
      <label>OverTime Hours </label>
      <input
      type="number"
      placeholder="Enter overtime hours"
      value={overTimeHours}
      onChange={(e)=>setOverTimeHours(e.target.value)}
      />
      </div>
      <div className="input-group">
      <label>OverTime Rate </label>
      <input
      type="number"
      placeholder="Enter overtime rate"
      value={overTimeRate}
      onChange={(e)=>setOverTimeRate(e.target.value)}
      />
      </div>
      </>
      )}
      
      <button onClick={calculateWage} disabled={hours===""||rate===""}>Calculate</button>

      {error && <p className="error">{error}</p>}

      {total && <h3 className="result">Total Pay: {total}</h3>}
      
    </div>
    </>
    


  );


}

export default App;