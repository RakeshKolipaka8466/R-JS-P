import { useState } from "react";
const Home=()=>{
  const [heading]=useState("iam Home");
  const [isActive,setIsActive]=useState(true);
  const togglecard=()=>{
     setIsActive(!isActive);
  }
  return(
    <div>
      <h2>{heading}</h2>

     { isActive?(<div className="card">
       its active mode
      </div>):
      (<div className="disablecard">
       its disable mode
      </div>)}
      <button onClick={togglecard}>{`Switch to ${isActive?"disable":"Active"} mode`}</button>
    </div>
  )
}
export default Home;