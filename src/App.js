import { useEffect, useState } from "react";
import "./App.css";
 

function App() {
  const [details, setDetails] = useState([]);

  const apiHandler = async()=>{
     const response = await fetch("https://fakestoreapi.com/products")
     const data = await response.json()
     setDetails(data)
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
