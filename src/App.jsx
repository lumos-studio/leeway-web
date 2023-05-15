import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction";

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Home" element={<Home />} />
      </Routes>


    </div>
  );
}
export default App

