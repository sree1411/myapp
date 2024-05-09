import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
 

function App() {
  const [details, setDetails] = useState([]);

  const apiHandler = ()=>{
    
      axios.get("https://fakestoreapi.com/products").then((res)=>{
           setDetails(res.data)
      })
     
  }
  

  useEffect(()=>{
    apiHandler()
  },[])


  return (
    <div className="App">
      {details.map((item) => {
        return (
          <>
            <li>{item.title}</li>
          </>
        );
      })}
    </div>
  );
}

export default App;
