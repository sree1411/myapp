 
import { useState } from 'react';
import './App.css';

function App() {


 const [users, setUsers]= useState({
   name:"",
   email:"",
   cars:"",
   gender:"",
   languages:[]
 })
 

const [updateUser, setUpdateuser]= useState('')


const handleChange =(e)=>{
   setUsers({...users, [e.target.name]:e.target.value})
}

 

  

  const handleSubmit =(e)=>{
    e.preventDefault()
    alert(JSON.stringify(users,null,2))
  }

  return (
    <>
    <div className="App">
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter the name' name='name'  onChange={handleChange} value={users.name} />   <br/>
        <input type="text" placeholder='enter the email' name='email'  onChange={handleChange} value={users.email}   /> <br/>
        <label for="cars">Choose a car:</label>
        <select id="cars" onChange={handleChange} name='cars'>
          <option value="volvo">Volvo</option>
          <option value="Benz">Benz</option>
          <option value="Mahendra">Mahendra</option>
          <option value="audi" selected>Audi</option>
        
        </select> <br/>


        <div className="gender_section">
              <input type="radio" id="male" name="gender" value='male' checked={users.gender ==="male"} onChange={handleChange}/>
              <label for="male">Male</label><br/> 
              <input type="radio" id="female" name="gender" value='female' checked={users.gender ==="female"}  onChange={handleChange} />
              <label for="female">Female</label><br/> 
              <input type="radio" id="other" name="gender" value='other' checked={users.gender ==="other"}  onChange={handleChange} />
              <label for="other">Other</label><br/> 
        </div>

        <div className="checkbox_container">
              <input type="checkbox" name="languages" id="" value='html' onChange={handleChange} />
              <label htmlFor="html">HTML</label>
              <input type="checkbox" name="languages" id="" value='css'   onChange={handleChange}/>
              <label htmlFor="">Css</label>
              <input type="checkbox" name="languages" id="" value='javascript' onChange={handleChange} />
              <label htmlFor="">Java Script</label>
        </div>
        <button type='submit'> submit</button>
        </form>

        
    </div>

   
    
    
    </>
    
  );
}

export default App;
