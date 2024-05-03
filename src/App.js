 
import './App.css';
import SampleComponent from './component/SampleComponent';
import TestComponent from './component/TestComponent';

function App() {
  
   const name= "sree"
   const age =22

  return (
    <div className="App">
        <SampleComponent name={name}/>
        <TestComponent age={age}/>
    </div>
  );
}

export default App;
