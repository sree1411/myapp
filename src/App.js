import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [users, setUsers]= useState([])

  const apiHandler = async()=>{
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setUsers(data)
  

  }
 useEffect(()=>{
  apiHandler()
 }, [])

  return (
    <div className="App">
        {
          users.map((item)=>{
           return<>
                <li>{item.name}</li>
                </>
          })
        }
    </div>
  );
}

export default App;
