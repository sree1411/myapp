 
import './App.css';
import SampleComponent from './component/SampleComponent';
import TestComponent from './component/TestComponent';
import UserComponent from './component/UserComponent';

function App() {
  
   const name= "sree"
   const age =22
   const user ={
    firstname:"sree",
    lastname:"virat",
    email:"sree@gmail.com"
   }

  return (
    <div className="App">
        <SampleComponent name={name}/>
        <TestComponent age={age}/>
        <UserComponent user={user}/>
    </div>
  );
}

export default App;
