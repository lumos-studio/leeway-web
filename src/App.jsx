import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction";
import Settings from "./Pages/settings";
import AuthPage from "./Pages/AuthPage";
import { AuthContextProvider } from "./context/Authcontext";



function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/transaction" element={ <Transaction /> } />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={ <Settings /> } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
export default App

