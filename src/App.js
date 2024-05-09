
import './App.css';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';
import SideBanner from './components/SideBanner';
 

function App() {
  return (
    <div className="App">
       
       <Navbar/>
      <div className="appSection">
           <HeroBanner/>
           <SideBanner/>
      </div>
       
    </div>
  );
}

export default App;
