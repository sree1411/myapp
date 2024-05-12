import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/product/:id" element={<ProductPage/>} />
         <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </div>
  );
}

export default App;
