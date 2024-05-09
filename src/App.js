import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
 

function App() {
  const [details, setDetails] = useState([]);

  const apiHandler = async ()=>{
    
   
     try {
      const response = await axios.get("https://fakestoreapi.com/products", {
        headers:{
          "Content-Type": "application/json",
        }
      })
      //  if(response.status === 200){
      //   setDetails(response.data)
      //  }
      const result = response.data
      setDetails(result)
     
       
     } catch (error) {
        console.log(error)
     }
     
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
