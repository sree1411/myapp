import './App.css';
import { useEffect, useState } from 'react';

function App() {



    // useState lo if else condition base midha raste
    // adi infinite loop loki veltadi , so alantapudu useEffect use 
    //cheste dantlo dependency valla oka sari loop ayi agi poyi result estadi

   const [name, setName] = useState('sreekanth')


     useEffect(()=>{
      if(name === "sreekanth"){
        setName("Sreekanth Renati")
      }else{
        setName("sreekanth")
      }
     },[])

     

  return (
    <div className="App">
    <h1>  name is :{name}</h1>
    </div>
  );
}

export default App;
