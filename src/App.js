import { useState } from "react";
import "./App.css";

function App() {

  

  const [students, setStudents] = useState([])


    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setStudents(data)).catch((error)=>console.log(error.message))



  return (
    <div className="App">
      <h1> hello  </h1>
      {
        students.map((student, index)=>(
           <div key={index}>
             <li>{student.name}</li>
           </div>
        ))
      }
    </div>
  );
}

export default App;
