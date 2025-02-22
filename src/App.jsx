import { useState } from "react";
import "./App.css";

function App(){
  const [hours,setHours] = useState("");
  const [rate,setRate] = useState("");
  const [total,setTotal] = useState(null);

  const calculateWage = () => {
    if(hours>0&&rate>0){
      setTotal(hours*rate);
    }else{
      setTotal(null);
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
      <button onClick={calculateWage}>Calculate</button>
      <h3 className="result"> 
        {total!=null? `Total Wage: ${total}`:"Enter Values"}
      </h3>
      
    </div>
    


  );


}

export default App;