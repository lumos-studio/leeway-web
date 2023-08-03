import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction";
import Settings from "./Pages/settings";
import AuthPage from "./Pages/AuthPage";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./context/Protected";



function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/transaction" element={<Protected><Transaction /></Protected>} />
          <Route path="/home" element={<Protected><Home /></Protected>} />
          <Route path="/settings" element={<Protected><Settings /></Protected>} />
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}
export default App

