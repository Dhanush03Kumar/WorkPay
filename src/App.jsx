import { useState } from "react";
import "./App.css";

function App(){
  const [hours,setHours] = useState("");
  const [rate,setRate] = useState("");
  const [total,setTotal] = useState(null);
  const [overTimeHours,setOverTimeHours]=useState("");
  const [overTimeRate,setOverTimeRate]=useState("");
  const [error,setError]=useState("");

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
    <div className="container">
      <h2>Daily wage Calculator</h2>
      <input
      type="number"
      placeholder="Enter your working hour"
      value={hours}
      onChange={(e)=>setHours(e.target.value)}
      />
      <br/>
      <input
      type="number"
      placeholder="Enter your rate"
      value={rate}
      onChange={(e)=>setRate(e.target.value)}
      />
      <br />
      <input
      type="number"
      placeholder="Enter overtime hours"
      value={overTimeHours}
      onChange={(e)=>setOverTimeHours(e.target.value)}
      />
      <br />
      <input
      type="number"
      placeholder="Enter overtime rate"
      value={overTimeRate}
      onChange={(e)=>setOverTimeRate(e.target.value)}
      />
      <br />
      <button onClick={calculateWage}>Calculate</button>

      {error && <p className="error">{error}</p>}

      <h3 className="result"> 
        {total!=null? `Total Wage: ${total}`:""}
      </h3>
      
    </div>
    


  );


}

export default App;