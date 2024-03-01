import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import './App.css'
import RegisterAuthorsForm from "./components/RegisterAuthorsForm";
import LoginAuthor from "./components/LoginAuthor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/games" element={<Products />}></Route>
          <Route path="/register" element={<RegisterAuthorsForm />}></Route>
          <Route path="/login" element={<LoginAuthor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
