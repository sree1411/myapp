 
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {

 const name ="sree"

  return (
    <div className="App">
        <FirstComponent name={name}/>
    </div>
  );
}

export default App;
